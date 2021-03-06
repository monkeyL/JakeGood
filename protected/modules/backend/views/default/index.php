
<div class="row">

    <div class="panel">
        <table>
            <tr>
                <td width="130" height="130" align="center">
                    <img src="<?php echo $store->logo; ?>" class="img-responsive img-circle" style="border:5px solid rgba(221, 221, 221, 0.62)">
                </td>
                <td valign="top" style="padding-left:10px;">
                    <h2>店铺名称：<?php echo $store->name; ?> &nbsp;&nbsp;&nbsp;&nbsp; <?php echo $store->area; ?></h2>
                    <div style="height:25px;margin-top:10px">账号：<?php echo Yii::app()->user->getName(); ?></div>
                    <div style="height:25px;">上次登录时间：<?php echo date('Y-m-d H:i:s', Yii::app()->user->getState('last_login')); ?></div>
                </td>
            </tr>
        </table>
    </div>
    <div class="mbl">
        <div class="center_info col-lg-8">

            <div class="portlet box">
                <div class="portlet-header">
                    <div class="caption text-uppercase">淘宝数据同步</div>
                </div>
                <div class="portlet-body">
                    <form action='<?php echo $this->createUrl('spider/index'); ?>' method="get" target="_blank">
                        <div class="col-md-8">
                        <input type="text" name="taourl" id="taourl" size="60" placeholder="输入宝贝/店铺地址" class="form-control"/>
                        </div>
                        <button class="btn btn-danger"><i class="fa fa-search"></i> 开始同步</button>
                    </form>
                </div>
            </div>

            <div class="portlet box">
                <div class="portlet-header">
                    <div class="caption text-uppercase">店铺提醒</div>
                </div>
                <div class="portlet-body">
                    <div style="padding:5px;" class="alert alert-danger">
                        <h5>需要立即处理的</h5>
                        <div style="color:#555">
                            <span>待发货订单 (<?php echo CHtml::link($waitShip, '/seller/order/listNew'); ?>)</span>&nbsp;&nbsp;
                            <span>待付款订单 (<?php echo CHtml::link($waitPay, '/seller/order/list'); ?>)</span>&nbsp;&nbsp;
                            <span>等待上架的宝贝 (<?php echo CHtml::link($stockItems, '/seller/item/stock'); ?>)</span>
                        </div>
                    </div>
                    <br />
                    <p>
                        宝贝管理：出售中的宝贝 (<?php echo CHtml::link($onSaleItems, '/seller/item/onSale'); ?>)
                    </p>
                    <p>
                        橱窗管理：已橱窗推荐数  ( <?php echo $showcaseItems; ?> )
                    </p>
                </div>
            </div>
            

            <div class="block">
                <h3>储购宝专区</h3>
                <table>
                    <tr>
                        <td width="60" height="60" align="center">
                            <img src="" width="50" height="50">
                        </td>
                        <td valign="top">
                            <div style="height:25px;margin-top:10px">
                                账号：<?php echo Yii::app()->user->getName(); ?> &nbsp;&nbsp;&nbsp; 
                                <a href="#">进入我的储购宝</a>
                            </div>
                            <div style="height:25px;">账户余额: 324.00</div>
                        </td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="right_info col-lg-4">
            <div class="portlet box">
                    <div class="portlet-header">
                            <div class="caption text-uppercase">官方信息中心</div>
                    </div>
                    <div class="portlet-body">
                        <p><a href="#">商品发布数量限制变更说明说明        10-17</a></p>
                        <p><a href="#">商品发布数量限制变更说明说明        10-17</a></p>
                        <p><a href="#">商品发布数量限制变更说明说明        10-17</a></p>
                        <p><a href="#">商品发布数量限制变更说明说明        10-17</a></p>
                        <p><a href="#">商品发布数量限制变更说明说明        10-17</a></p>
                        <p><a href="#">商品发布数量限制变更说明说明        10-17</a></p>
                        <p><a href="#">商品发布数量限制变更说明说明        10-17</a></p>
                    </div>
            </div>
        </div>

    </div>
</div>