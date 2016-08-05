function loadHtml(){var argNum=arguments.length;var objId;var url;var data;if(argNum==2)
{objId=arguments[0];url=arguments[1];createWaitDiv();jQuery.post(url,{},function(backdata){jQuery("#"+objId).html(backdata[0]);deleteWaitDiv();},"json");}
else if(argNum==3)
{objId=arguments[0];url=arguments[1];data=arguments[2];createWaitDiv();jQuery.post(url,data,function(backdata){jQuery("#"+objId).html(backdata[0]);deleteWaitDiv();},"json");}
else
{return false;}
return true;}
function loadHeader(url,data,callback){jQuery("#divHeader").load(url,data,callback);}
function loadFooter(url,data,callback){jQuery("#divFooter"+objId).load(url,data,callback);}
function getRequest(url,data,callback){jQuery.get(url,data,callback);}
function getScript(url,callback){jQuery.get(url,callback);}
function getData(url,data,callback){jQuery.getJSON(url,callback);}
function postRequest(){createWaitDiv();var argNum=arguments.length;var url;var data;var callback;if(argNum==1)
{url=arguments[0];jQuery.post(url,{},function(){deleteWaitDiv();});}
else if(argNum==2)
{url=arguments[0];data=arguments[1];jQuery.post(url,data,function(){deleteWaitDiv();});}
else if(argNum==3)
{url=arguments[0];data=arguments[1];callback=arguments[2];jQuery.post(url,data,function(backData){callback(backData);deleteWaitDiv();},"json");}
else
{deleteWaitDiv();return false;}
return true;}
function ajaxRequest(){var argNum=arguments.length;var postUrl;var postData;var successFun;var failFun;var userAgent=window.navigator.userAgent.toLowerCase();var retryCnt=0;if(argNum==3||argNum==4)
{postUrl=arguments[0];postData=arguments[1];successFun=arguments[2];if(argNum==4){createWaitDiv("1");}else{createWaitDiv();}
failFun=ajaxFail;jQuery.ajax({type:"POST",url:postUrl,data:postData,dataType:"json"}).done(function(backData,textStatus){deleteWaitDiv();if(textStatus=="success"){successFun(backData);}else{failFun(textStatus);};}).fail(function(xhr,textStatus,errorThrown){if(userAgent.indexOf('safari')!=-1){retryCnt++;if(retryCnt<10){$.ajax(this);}else{deleteWaitDiv();failFun(textStatus,errorThrown);}}else{deleteWaitDiv();failFun(textStatus,errorThrown);}})}else{deleteWaitDiv();return false;}
return true;}
function fileUpload(objId,urlAddress,callBack,uploadData){createWaitDiv("1");var failFun=ajaxFail;jQuery.ajaxFileUpload({url:urlAddress,secureuri:false,fileElementId:objId,data:uploadData,dataType:'json',success:function(backData){if(backData!=null&&backData["sysTimeoutEer"]=="Timeout"){jQuery(document.createElement('form')).attr('name','frmError').attr('id','frmError').attr('action',getHost()+'/').attr('method','post').appendTo('body');document.forms["frmError"].submit();}else if(backData!=null&&backData["sysOverEer"]=="Over"){jQuery(document.createElement('form')).attr('name','frmError').attr('id','frmError').attr('action',getHost()+'/default/Error/oversize').attr('method','post').appendTo('body');document.forms["frmError"].submit();}else{callBack(backData);}
deleteWaitDiv();},error:function(XMLHttpRequest,textStatus,errorThrown){failFun(textStatus,errorThrown);deleteWaitDiv();}})
return true;}
function ajaxFail(textStatus,errorThrown){jQuery(document.createElement('form')).attr('name','frmError').attr('id','frmError').attr('action',getHost()+'/default/error/ajax').attr('method','post').appendTo('body');jQuery(document.createElement('input')).attr('name',"textStatus").attr('id',"textStatus").attr('type',"hidden").attr('value',textStatus).appendTo('#frmError');if(errorThrown!=undefined){jQuery(document.createElement('input')).attr('name',"errorThrown").attr('id',"errorThrown").attr('type',"hidden").attr('value',errorThrown).appendTo('#frmError');}
document.forms["frmError"].submit();}
function createWaitDiv(){jQuery(document.createElement('div')).attr('id','divPause').css({'position':'absolute','top':'0','left':'0','z-index':'9999999','width':"100%",'height':$(document).height()+'px','text-align':'center','font':'bold 24px arial','background-repeat':'no-repeat','background-position':'center','background-attachment':'fixed'}).appendTo('body');if(arguments.length==0){setTimeout("displayWaitDiv()",500);}}
function displayWaitDiv(){if(jQuery('#divPause')!=null){jQuery('#divPause').css({'background-image':'url('+getAjaxWaitImage()+')'});}}
function deleteWaitDiv(){setTimeout("jQuery('#divPause').replaceWith('');",0);}
function getWaitHeight(){var scrollHeight,offsetHeight;if($.browser.msie&&$.browser.version<7){scrollHeight=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);offsetHeight=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(scrollHeight<offsetHeight){return $(window).height()+'px';}else{return scrollHeight+'px';}}else{return $(document).height()+'px';}}
$(document).on("ajaxSend",function(c,xhr){$(window).on('beforeunload',function(){var userAgent=window.navigator.userAgent.toLowerCase();var appVersion=window.navigator.appVersion.toLowerCase();if(userAgent.indexOf('msie')!=-1){if(appVersion.indexOf("msie 9.")!=-1||appVersion.indexOf("msie 10.")!=-1){return;}}
xhr.abort();})});