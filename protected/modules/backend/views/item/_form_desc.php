
<script type="text/javascript" charset="utf-8" src="/assets/plugins/ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/assets/plugins/ueditor/ueditor.all.min.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="/assets/plugins/ueditor/lang/zh-cn/zh-cn.js"></script>

<div style="width:810px;">
<?php echo CHtml::activeTextArea($model, 'desc'); ?>
</div>
<script type="text/javascript">
	UE.getEditor('Item_desc');
</script>