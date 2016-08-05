function app_post(){var arrMsg=new Array();trim("txtName");resultValue=chkBlank("txtName");if(!resultValue[0]){arrMsg[arrMsg.length]=String.format(getMessage(resultValue[1]),getLabel("app_CM0094_Name"));}else{resultValue=chkMaxLength("txtName",64);if(!resultValue[0]){arrMsg[arrMsg.length]=String.format(getMessage(resultValue[1]),getLabel("app_CM0094_Name"),64);}}
trim("txtComment");resultValue=chkBlank("txtComment");if(!resultValue[0]){arrMsg[arrMsg.length]=String.format(getMessage(resultValue[1]),getLabel("app_CM0094_blogLabel"));}else{resultValue=chkMaxLength("txtComment",2000);if(!resultValue[0]){arrMsg[arrMsg.length]=String.format(getMessage(resultValue[1]),getLabel("app_CM0094_blogLabel"),2000);}}
trim("txtUrl");resultValue=chkMaxLength("txtUrl",256);if(!resultValue[0]){arrMsg[arrMsg.length]=String.format(getMessage(resultValue[1]),"URL",256);}
if(arrMsg.length>0){setErrorMsg(arrMsg,600);return;}
clearErrorMsg();setDisabled("CM0094UD01","true");setSubmitDisable();var strUrl=getHost()+"/app/Blogarticleview/confirm";document.getElementById("blogArticleViewForm").action=app_setUrlModePc(strUrl);document.getElementById("blogArticleViewForm").submit();}
function app_jumpToComplete(){setDisabled("CM0094UD02","true");setSubmitDisable();var strUrl=getHost()+"/app/Blogarticleview/post";document.getElementById("blogArticleViewForm").action=app_setUrlModePc(strUrl);document.getElementById("blogArticleViewForm").submit();}
function app_backToArticleList(ArticleId){setSubmitDisable();var strUrl=getHost()+"/app/Blogarticleview/index/ArticleId/"+ArticleId;document.getElementById("blogArticleViewForm").action=app_setUrlModePc(strUrl);document.getElementById("blogArticleViewForm").submit();}
function app_moveListPage(pageNo){setSubmitDisable();var catgParam='';var articleCatgId=$("#hidArtcleCatgId").val();if(articleCatgId&&0<parseInt(articleCatgId)){catgParam="/ArticleCatgId/"+articleCatgId;}
var strUrl=getHost()+"/app/Blogarticlelist/index/pageNo/"+pageNo+catgParam;window.location.href=app_setUrlModePc(strUrl);}
function app_moveCommentPage(pageNo){setSubmitDisable();var articleIdParam='';var articleId=$("#hidArticleId").val();if(articleId&&0<parseInt(articleId)){articleIdParam="/ArticleId/"+articleId;}
var form=document.getElementById("blogArticleViewForm");var strUrl=getHost()+"/app/Blogarticleview/index/pageNo/"+pageNo+articleIdParam;strUrl=app_setUrlModePc(strUrl)+"#commentTop";form.action=strUrl;form.submit();}
function app_setUrlModePc(strUrl){var strQuery=location.search;if(strQuery.length>1){if(strQuery.search(/mode=pc/)!==-1){strUrl+="?mode=pc";}}
return strUrl;}
function app_movePage(pageContainerId){var pageNo=getCurPage(pageContainerId);if(pageContainerId=="listPageHead"||pageContainerId=="listPagerDiv"){app_moveListPage(pageNo);}else if(pageContainerId=="commentPageHead"||pageContainerId=="commentPagerDiv"){app_moveCommentPage(pageNo);}}
function gotoPage(pageContainerId,orderContainerId){app_movePage(pageContainerId);}
function firstPage(pageContainerId,orderContainerId){app_movePage(pageContainerId);}
function prePage(pageContainerId,orderContainerId){app_movePage(pageContainerId);}
function nextPage(pageContainerId,orderContainerId){app_movePage(pageContainerId);}
function lastPage(pageContainerId,orderContainerId){app_movePage(pageContainerId);}
function orderSearch(pageContainerId,orderContainerId){app_movePage(pageContainerId);}