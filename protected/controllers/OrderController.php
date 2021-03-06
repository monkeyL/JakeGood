<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of OrderController
 *
 * @author Fighter
 */
class OrderController extends BaseController {
    
    public $must_login = TRUE;
            
    function init()
    {
        parent::init();
    }
    
    public function actionConfirm()
    {
        $this->template = '/confirm_order';
        
        $from = $this->request->getPost('from'); //来自详情页立即购买
        
        $this->data['hidden_nav'] = true;
        if($from == 'detail')
        {
            list($items, $sub_total, $amount, $ships) = $this->buildItem();
            
            $this->data['items']     = $items;
            $this->data['sub_total'] = $sub_total;
            $this->data['ships']     = $ships;
            $this->data['amount']    = sprintf("%.2f", $amount);
        }
        else
        {
            $buy_items   = $this->request->getPost('items');
            if ( ! $buy_items)
            {
                return parent::renderError('没有要结算的商品');
            }
            $cart  = ShoppingCart::model()->findByAttributes(array('user_id' => Yii::app()->user->getId(), 'market_id' => $this->market->market_id));
            $items = json_decode($cart->items);
            $confirm_items = array();
            $amount = 0;
            foreach ($buy_items as $store_id => $v)
            {
                $ship_data = array('express' => 0, 'ems' => 0, 'post' => 0);
                $sub_total = 0;
                $confirm_items[$store_id] = (object) array();
                foreach ($v as $sku_id => $t)
                {
                    $cart_item = $items->$store_id->$sku_id;
                    $item = Item::model()->findByPk($cart_item->item_id);
                    
                    $ship_data['express'] += $item->express_fee;
                    $ship_data['ems'] += $item->ems_fee;
                    $ship_data['post'] += $item->post_fee;
                    
                    $cart_item->total = sprintf("%.2f", $items->$store_id->$sku_id->price * $items->$store_id->$sku_id->quantity);
                    $sub_total += $cart_item->total;
                    $confirm_items[$store_id]->$sku_id = $cart_item;
                }
                
                $amount += $sub_total + $ship_data['express'];
                $this->data['sub_total'][$store_id] = sprintf("%.2f", $sub_total + $ship_data['express']);
                
                $ship_data['express'] = sprintf("%.2f", $ship_data['express']);
                $ship_data['ems']     = sprintf("%.2f", $ship_data['ems']);
                $ship_data['post']    = sprintf("%.2f", $ship_data['post']);
                $this->data['ships'][$store_id]['data'] = $ship_data;
                $this->data['ships'][$store_id]['options']['express'] = '快递 ' .$ship_data['express'].'元';
                $this->data['ships'][$store_id]['options']['ems']     = 'EMS  ' .$ship_data['ems'].'元';
                $this->data['ships'][$store_id]['options']['post']    = '平邮 ' .$ship_data['post'].'元';
                
            }
            
            $this->data['amount'] = sprintf("%.2f", $amount);
            $this->data['items']  = $confirm_items;
        }
        
        $addresses = AddressBook::model()->findAll('user_id = :user_id', array(':user_id' => Yii::app()->user->getId()));
        $this->data['addresses'] = $addresses;
    }
    
    public function actionSave()
    {
        $orders = $this->insertOrder();
        if ($orders !== FALSE)
        {
            foreach ($orders as $order)
            {
                $items = $order->OrderItem;
                $ext = count($items) > 1 ? '...等多件' : '';
                $arr = array(
                    'seller'      => (int)    $order->store_id, //商家帐户
                    'order_sn'    => (string) $order->sn, //订单号
                    'title'	  => (string) $items[0]['title'] . $ext, //订单说明/标题
                    'total'       => (float)  $order->amount, //支付总额
                    'item_total'  => (float)  $order->item_total, //商品总额
                    'express_fee' => (string) $order->ship_fee,
                    'commission ' => (float)  $order->commission,
                    'address'     => (string) $order->receiver_address,
                    'order_time'  => (int)    $order->created,
                    'order_url'   => (string) Yii::app()->createAbsoluteUrl('member/order/detail', array('sn' => $order->sn)),
                );
                Yii::app()->CGB->setOrder($arr);
            }
            Yii::app()->CGB->setMarket($this->market);
            Yii::app()->CGB->checkout();
        }
        die;
    }
    
    function insertOrder()
    {
        $addr_id  = $this->request->getPost('address');
        $items    = $this->request->getPost('items');
        $memos    = $this->request->getPost('memo');
        $ships    = $this->request->getPost('ship');
        
        $address = AddressBook::model()->findByPk($addr_id);
        
        $orders = array();
        $transaction = Yii::app()->db->beginTransaction();
        try 
        {
            $cart  = ShoppingCart::model()->findByAttributes(array('user_id' => Yii::app()->user->getId(), 'market_id' => $this->market->market_id));
            $cart->items = (array) json_decode($cart->items);
            
            $orderTime = time();
            foreach ($items as $store_id => $v)
            {
                $order = new Order();
                
                $order->user_id    = Yii::app()->user->getId();
                $order->market_id  = $this->market->market_id;
                $order->store_id   = $store_id;
                $order->status     = 1;
                $order->is_pay     = 0;
                $order->ship_type  = $ships[$store_id];
                $order->memo       = $memos[$store_id];
                $order->created    = $orderTime;
                
                $order->receiver_name     = $address->name;
                $order->receiver_country  = $address->country;
                $order->receiver_state    = $address->state;
                $order->receiver_city     = $address->city;
                $order->receiver_district = $address->district;
                $order->receiver_address  = $address->area.' '.$address->address;
                $order->receiver_zip      = $address->zipcode;
                $order->receiver_mobile   = $address->mobile;
                $order->receiver_phone    = $address->phone;
                
                $orderItems = array();
                $ship_type  = $order->ship_type.'_fee';
                $ship_fee   = 0;
                $amount     = 0;
                $item_total = 0;
                $commission = 0;
                foreach ($v as $sku_id => $quantity)
                {
                    //如果购物车里有该商品则提出来
                    //删除购物车的商品
                    if (isset($cart->items->$store_id->$sku_id))
                    {
                        $cart_item = $cart->items->$store_id->$sku_id;
                        unset($cart->items->$store_id->$sku_id);
                    }
                    
                    $price = 0;
                    if ($sku_id > 0)
                    {
                        $sku  = ItemSku::model()->findByPk($sku_id);
                        $item_id = $sku->item_id;
                        $sku->stock -= $quantity;
                        $sku->update();
                        $price = $sku->price;
                        $item = Item::model()->findByPk($item_id);
                    }
                    else
                    {
                        $item_id = -$sku_id;
                        $item = Item::model()->findByPk($item_id);
                        $price = $item->price;
                    }
                    $ship_fee += ($item->$ship_type * $quantity);
                    $sub_total = $quantity * $price;
                    $item_total += $sub_total;
                    $commission += $sub_total * $item->commission;
                    $orderItems[] = array(
                        'item_id'     => $item_id,
                        'title'       => $item->title,
                        'pic'         => $item->pic_url,
                        'props_name'  => $cart_item->props,
                        'price'       => $price,
                        'ship_fee'    => $item->$ship_type * $quantity,
                        'quantity'    => $quantity,
                        'total'       => $sub_total + ($item->$ship_type * $quantity),
                        'commission'  => $sub_total * $item->commission,
                        'created'     => time()
                    );
                    $item->num -= $quantity;
                    $item->update();
                    
                    
                    $counter = ItemCounter::model()->findByPk($item_id);
                    $counter->sale += $quantity;
                    $counter->save();
                }
                $order->item_total = $item_total;
                $order->ship_fee   = $ship_fee;
                $order->amount     = $item_total+$ship_fee;
                $order->commission = $commission;
                $order->OrderItem = $orderItems;
                $order->sn = '123';
                if ($order->save())
                {
                    $orders[] = $order;
                }    
                else
                {
                    $transaction->rollback();
                }
            }
            $cart->items = json_encode($cart->items);
            $cart->update();
            $transaction->commit();
            return $orders;
        }
        catch (Exception $e)
        {
            $transaction->rollback();
            return false;
        }
    }
    function buildItem()
    {
        $item_id  = $this->request->getPost('item_id');
        $sku_id   = $this->request->getPost('sku_id');
        $quantity = $this->request->getPost('quantity');
        $items = array();
        $item  = Item::model()->findByPk($item_id);
        
        if ($sku_id > 0)
        {
            $sku = ItemSku::model()->findByPk($sku_id);
            $prop_imgs = json_decode($item->prop_imgs);

            $pic = $item->pic_url;
            preg_match_all('/(\d+):(\d+)/', $sku->props, $matches, PREG_SET_ORDER);
            foreach ($matches as $v)
            {
                if (isset($prop_imgs->$v[1]->$v[2]))
                {
                    $pic = $prop_imgs->$v[1]->$v[2];
                }
            }
            $quantity = ($quantity > $sku->stock ? $sku->stock : $quantity);
            $items[$item->store_id][$sku_id] = (object) array(
                'item_id'  => $item_id,
                'sku_id'   => $sku_id,
                'price'    => $sku->price,
                'quantity' => $quantity, 
                'total'    => sprintf("%.2f", $sku->price * $quantity),
                'title'    => $item->title,
                'pic'      => $pic,
                'props'    => $sku->props_name
            );
            
            $sub_total[$item->store_id] = sprintf("%.2f", $sku->price * $quantity);
        }
        else
        {
            $quantity = ($quantity > $item->num ? $item->num : $quantity);
            $items[$item->store_id][-$item_id] = (object) array(
                'item_id'  => $item_id,
                'sku_id'   => 0,
                'price'    => $item->price,
                'quantity' => $quantity, 
                'total'    => sprintf("%.2f", $item->price * $quantity),
                'title'    => $item->title,
                'pic'      => $item->pic_url,
                'props'    => ''
            );
            $sub_total[$item->store_id] = sprintf("%.2f", $item->price * $quantity);
        }
        
        $amount = $sub_total[$item->store_id]+$item->express_fee;
        
        $ships[$item->store_id]['data']['express'] = $item->express_fee;
        $ships[$item->store_id]['data']['ems']     = $item->ems_fee;
        $ships[$item->store_id]['data']['post']    = $item->post_fee;
        $ships[$item->store_id]['options']['express'] = '快递 ' .$item->express_fee.'元';
        $ships[$item->store_id]['options']['ems']     = 'EMS  ' .$item->ems_fee.'元';
        $ships[$item->store_id]['options']['post']    = '平邮 ' .$item->post_fee.'元';
        
        return array($items, $sub_total, $amount, $ships);
    }
}
