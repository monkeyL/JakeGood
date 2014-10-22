<style type="text/css">
    .order_list table {border: 0; margin-top: 10px; }
    .order_list table thead{border: 1px solid #E6E6E6;}
    .order_list table>thead>tr>th {text-align: center; font-weight: 100;}
    .order_list .table tr th:last-child, .order_list .table tr td:last-child {text-align: center}
    .order_list .table tr th:last-child, .order_list .table tr td:last-child {padding: 5px;}
    .order_list .order {border-left:1px solid #E6E6E6;border-right:1px solid #E6E6E6;}
    .order_list .order_hd {background: #F3F3F3;}
    .order_list .order_hd td{ border: 1px solid #B4D5FF;border-color: #E6E6E6 #E6E6E6 #EAEAEA;}
    .order_list .order_item td{padding:5px;  text-align: center; border-bottom: 1px solid #E6E6E6;}
    .order_list .order_item td.pic img{height:80px;}
    .order_list .order_item td.item{text-align: left; border-right:0;width: 300px;}
    .order_list .order_item td.item a{color: #666}
    .order_list .order_item td.item div{color: #2bb8aa}
    .order_list .order_item td.num{border-right: 1px solid #EAEAEA;}
    .order_list .order_item td.trade_status{border-right: 1px solid #EAEAEA;}
    .order_list .order_item td.trade_status a{color: #666}
    .order_list .order_item td.amount{border-right: 1px solid #EAEAEA;}
    .order_list .order_item td.remark{}
    .order_list .order_item td.contact{border-right: 1px solid #EAEAEA;border-bottom: 1px solid #D4E7FF;}
</style>

<div class="">
    <script type="text/javascript">
        $(document).ready(function() {
            var dpconfig = {
                dateFormat: 'yy-mm-dd',
                yearRange: "2012:<?php echo date('Y') ?>",
                monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
            };
            $("input.datepiker").datepicker(dpconfig);
        });
    </script>
    <?php
    $fOrderStatus = $statusOptions;
    $fOrderStatus[0] = '全部';
    $fCommStatus = array('' => '全部', 0 => '未评', 1 => '已评');
    ?>
    <form method="get">
        <div id="table_id_filter" class="dataTables_filter">
            <div class="input-group input-group-sm mbs">
                <span class="input-group-btn">
                    订单状态
                </span>
                <?php echo CHtml::dropDownList('filter[orderStatus]', $filter['orderStatus'], $fOrderStatus, array('class' => 'form-control input-sm', 'onchange' => 'this.form.submit()')); ?>
            </div>
        </div> 
    </form>
</div>
<div class="orders-wrapper order_list">
    <table class="table table-hover table-striped table-bordered table-advanced tablesorter">
        <thead>
            <tr>
                <th colspan="2">宝贝</th>
                <th width="30">数量</th>
                <th width="65px">总价(元)</th>
                <th>订单状态</th>
                <th width="70px">操作</th>
            </tr>
        </thead>
        <?php foreach ($orders as $k => $order) : ?>
            <?php if ($k >= 0): ?>
                <tr class="sep_row">
                    <td colspan="6" style="padding: 3px"></td>
                </tr>
            <?php endif; ?>
            <tbody class="order">
                <tr class="order_hd">
                    <td colspan="6">
                        <div style="float:left; margin-right:20px;">订单编号: <?php echo $order->sn; ?></div>
                        <div style="float:left; margin-right:20px;">成交时间: <?php echo date('Y-m-d H:i:s', $order->created); ?></div>
                        <div style="float:right;">
                            <a href="<?php echo $this->createUrl('remove', array('sn' => $order->sn)); ?>" >删除</a>
                        </div>
                    </td>
                </tr>
                <?php $countItems = count($order->OrderItem); ?>
                <?php foreach ($order->OrderItem as $itemk => $item) : ?>	
                    <tr class="order_item">
                        <td class="pic">
                            <a href="<?php echo $this->createUrl('/item/detail', array('item_id' => $item->item_id)); ?>" target="_blank"><img src="<?php echo $item->pic; ?>" /></a>
                        </td>
                        <td class="item">
                            <a class="deal-title" href="<?php echo $this->createUrl('/item/detail', array('item_id' => $item->item_id)); ?>" target="_blank"><?php echo $item->title; ?></a>
                            <div><?php echo $item->props_name; ?></div>
                        </td>
                        <td class="num"><?php echo $item->quantity; ?></td>
                        <?php if ($itemk == 0) : ?>
                            <td class="amount" rowspan="<?php echo $countItems; ?>"><?php echo $order->amount; ?></td>
                            <td class="trade_status" rowspan="<?php echo $countItems; ?>">
                                <p style="color:#2bb8aa"><?php echo $statusOptions[$order->status]; ?></p>
                                <a href="<?php echo $this->createUrl('orders/detail', array('sn' => $order->sn)); ?>">订单详情</a>
                            </td>
                            <td rowspan="<?php echo $countItems; ?>">
                                <?php 
                                    if ($order->is_pay == 0)
                                    {
                                        echo CHtml::link('付款', $this->createUrl('orders/pay', array('sn' => $order->sn)), array('class' => 'btn-hot btn-mini', 'target' => '_blank'));
                                    }
                                    elseif ($order->status == 2)
                                    {
                                        echo CHtml::link('确认收货', $this->createUrl('orders/confirm', array('sn' => $order->sn)), array('class' => 'btn-hot btn-mini', 'target' => '_blank'));
                                        echo CHtml::link('申请退款', $this->createUrl('refund/order', array('sn' => $order->sn)), array('class' => 'btn-hot btn-mini', 'target' => '_blank'));
                                    }
                                    elseif ($order->status == 3)
                                    {
                                        echo CHtml::link('确认收货', $this->createUrl('orders/confirm', array('sn' => $order->sn)), array('class' => 'btn-hot btn-mini', 'target' => '_blank'));
                                    }
                                ?>
                            </td>
                        <?php endif; ?>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        <?php endforeach; ?>
    </table>
    <?php
    if (!$orders)
    {
        echo "<br />&nbsp;&nbsp;暂无数据";
    }
    ?>
    
    <div class="paginator-wrapper">
        <?php
        $this->widget('ILinkPager', array(
            'pages' => $pages,
            'htmlOptions' => array('class' => 'paginator paginator--notri paginator--large'),
            'header' => '',
            'prevPageLabel' => '上一页',
            'nextPageLabel' => '下一页',
            'selectedPageCssClass' => 'current',
            'skin' => false,
            'cssFile' => false,
        ))
        ?>
    </div>
</div>