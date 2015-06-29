$(function(){
    $(document).pjax('a[data-pjax]','#wrap',{fragment:'#wrap',timeout:10000}).on('pjax:send',function(){
     	return $('#wrap').fadeTo(0,0);
     }).on('pjax:complete',function(){
     	_loadDuodsuo();
     	return $('#wrap').fadeTo("fast",1);
     });

     /**
 * pjax后需要回调函数.加载多说
 */
function _loadDuodsuo(){
	var dus=$(".ds-thread");
	if($(dus).length==1){
		var el = document.createElement('div');
		el.setAttribute('data-thread-key',$(dus).attr("data-thread-key"));//必选参数
		el.setAttribute('data-url',$(dus).attr("data-url"));
		DUOSHUO.EmbedThread(el);
		$(dus).html(el);
	}
}
})
