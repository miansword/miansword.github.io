$(function(){
    $(document).pjax('a[data-pjax]','#wrap',{fragment:'#wrap',timeout:10000}).on('pjax:send',function(){
     	return $('#wrap').fadeTo(0,0);
     }).on('pjax:complete',function(){
     	return $('#wrap').fadeTo("fast",1);
     });
})