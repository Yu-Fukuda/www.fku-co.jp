function getTextboxValue(objId){var obj=jQuery("#"+objId);return obj.val();}
function setTextboxValue(objId,value){var obj=jQuery("#"+objId);obj.val(value);}
function getChecked(objId){var obj=jQuery("#"+objId);return obj.prop("checked");}
function getCheckboxValue(objName){var arrCheck=document.getElementsByName(objName);var str="";for(var i=0;i<arrCheck.length;i++){if(arrCheck[i].checked){str+=arrCheck[i].value+",";}}
if(str.length>0){str=str.substr(0,str.length-1);}
return str;}
function getRadioValue(objName){var arrRadio=document.getElementsByName(objName);for(var i=0;i<arrRadio.length;i++){if(arrRadio[i].checked){return arrRadio[i].value;}}
return"";}
function getRadioText(objName){var txtRadioText="";jQuery("input[name="+objName+"]").each(function(){if(jQuery(this).prop("checked")==true){txtRadioText=jQuery("label[for="+jQuery(this).attr("name")+"No"+jQuery(this).attr("value")+"]").text();}});return txtRadioText;}
function getCheckBoxText(objName){var arrCheckBoxText=new Array();var intCount=0;jQuery("input[name="+objName+"]").each(function(){if(jQuery(this).prop("checked")==true){arrCheckBoxText[intCount]=jQuery("label[for="+jQuery(this).attr("name")+"No"+jQuery(this).attr("value")+"]").text();intCount=intCount+1;}});return arrCheckBoxText.toString();}
function setChecked(objId,flag){var obj=jQuery("#"+objId);obj.prop("checked",flag);}
function zenToHanC(objId){var value=jQuery("#"+objId).val();jQuery("#"+objId).val(zenToHan(value));}
function zeroShiftC(objId){var value=jQuery("#"+objId).val();jQuery("#"+objId).val(zeroShift(value));}
function zeroFormatC(objId,number){var value=jQuery("#"+objId).val();jQuery("#"+objId).val(zeroFormat(value,number));}
function searchTrim(objId){trim(objId);}
function updateTrim(objId){trim(objId);}
function toSearchTrim(value){return toTrim(value);}
function toUpdateTrim(value){return toTrim(value);}
function trim(objId){var value=jQuery("#"+objId).val();jQuery("#"+objId).val(toTrim(value));}
function ltrim(objId){var value=jQuery("#"+objId).val();jQuery("#"+objId).val(toLTrim(value));}
function rtrim(objId){var value=jQuery("#"+objId).val();jQuery("#"+objId).val(toRTrim(value));}
function getSelectedValue(objId){return jQuery("#"+objId+" option:selected").val();}
function getSelectedText(objId){return jQuery("#"+objId+" option:selected").text();}
function setSelectedByValue(objId,value){jQuery("#"+objId).prop("value",value);}
function clearList(objId){jQuery("#"+objId).empty();}
function removeFromDropdownList(objId,value){jQuery("#"+objId+" option").each(function(){if(jQuery(this).val()==value){jQuery(this).remove();}});}
function addToList(objId,value,text){jQuery("<option value="+value+">"+text+"</option>").appendTo(jQuery("#"+objId));}
function dateFormat(objId,formatString){var returnValue;var value=jQuery("#"+objId).val();if(chkDate(objId)){if(formatString=="yyyy-MM-dd"){returnValue=value.substr(0,4)+"-"+value.substr(4,2)+"-"+value.substr(6,2);}else if(formatString=="yyyy/MM/dd"){returnValue=value.substr(0,4)+"/"+value.substr(4,2)+"/"+value.substr(6,2);}else{returnValue=value;}}
jQuery("#"+objId).val(returnValue);}
function zenToHan(value){var result="";for(i=0;i<value.length;i++){code=value.charCodeAt(i);if(code>=65281&&code<=65373){result+=String.fromCharCode(value.charCodeAt(i)-65248);}else if(code==12288){result+=String.fromCharCode(value.charCodeAt(i)-12288+32);}else{result+=value.charAt(i);}}
return result;}
function zeroShift(value){var rep=new RegExp("^0+0?");return value.replace(rep,"");}
function zeroFormat(value,zeroNumber){var temp=value;while(temp.length<zeroNumber){temp="0"+temp;}
return temp;}
function toTrim(value){if(value!=undefined){if(navigator.userAgent.toLowerCase().indexOf("ie")!=-1){return value.replace(/(^(\s|　)*)|((\s|　)*$)/g,"");}
else{return value.replace(/(^(\s)*)|((\s)*$)/g,"");}}else{return"";}}
function toLTrim(value){return value.replace(/(^(\s|　)*)/g,"");}
function toRTrim(value){if(navigator.userAgent.toLowerCase().indexOf("ie")!=-1){retval=value.replace(/((\s)*$)/g,"");retval=retval.replace(/((　)*$)/g,"");}
else{retval=value.replace(/((\s)*$)/g,"");}
return retval;}
function getLength(value){var length=value.length;return length;}
function getBLength(value){var length=value.replace(/[^\x00-\xFF]/g,'**').length;return length;}
function getValue(objId)
{var value=jQuery("#"+objId).prop("value");return value;}
function setValue(objId,value)
{jQuery("#"+objId).prop("value",value);}
function getSelectedIndex(objId)
{var index=jQuery("#"+objId).get(0).selectedIndex;return index;}
function setSelectedByIndex(objId,index)
{jQuery("#"+objId).get(0).selectedIndex=index;}
function getDisabled(objId)
{var obj=jQuery("#"+objId);return obj.prop("Disabled");}
function setDisabled(objId,flag)
{var obj=jQuery("#"+objId);obj.prop("disabled",flag);}
function getReadOnly(objId)
{var obj=jQuery("#"+objId);return obj.prop("readonly");}
function setReadOnly(objId,flag)
{var obj=jQuery("#"+objId);obj.prop("readonly",flag);}
function setInnerText(objId,value)
{var obj=jQuery("#"+objId);obj.text(value);}
function getInnerText(objId)
{var obj=jQuery("#"+objId);return obj.text();}
function setInnerHTML(objId,value)
{var obj=jQuery("#"+objId);var childObj=obj;childObj.find("*").each(function(){if(jQuery(this).attr("id")!=""){jQuery(this).removeAttr("onclick");jQuery(this).unbind();}});obj.html(value);}
function getInnerHTML(objId)
{var obj=jQuery("#"+objId);return obj.html();}
function setFocus(objId)
{var obj=jQuery("#"+objId);obj.focus();}
function setSelect(objId)
{var obj=jQuery("#"+objId);obj.select();}
function showDialog(url,_left,_top,_width,_height,_modal,_resizable,_status,_scroll){var result;var iTop=(window.screen.availHeight-30-_height)/2;var iLeft=(window.screen.availWidth-10-_width)/2;if(_left==-1||_top==-1){_left=iLeft;_top=iTop;}
var ieFeatures="dialogWidth="+_width+"px;"+"dialogHeight="+_height+"px;"+"dialogLeft="+_left+"px;"+"dialogTop="+_top+"px;"+"resizable="+_resizable+";"+"status="+_status+";"+"scroll="+_scroll;var otherFeatures="width="+_width+","+"height="+_height+","+"left="+_left+","+"top="+_top+","+"resizable="+_resizable+","+"status="+_status+","+"scrollable="+_scroll;if(_modal=='yes'){window.openSonModel=true;}else{window.openSonModel=false;}
if(navigator.userAgent.toLowerCase().indexOf("ie")!=-1){if(_modal=='yes'){result=window.showModalDialog(url,window,ieFeatures);}else{result=window.showModelessDialog(url,window,ieFeatures);}}else{if(_modal=='yes'){result=window.showModalDialog(url,window,ieFeatures);}else{otherFeatures+=',modal='+_modal;result=window.open(url,'_blank',otherFeatures);windowArray.push(result);}}
return result;}
function getHost(){var path_arr=document.URL.split('/');var host=path_arr[0]+"//"+path_arr[2]+"/"+path_arr[3];var loginhost=getLoginHost();var carthost=getCartHost();loginhost=loginhost.replace('/preview','');carthost=carthost.replace('/preview','');if(loginhost==host||carthost==host){host=path_arr[0]+"//"+path_arr[2]+"/"+path_arr[3]+getPreviewHost();}
else{host=path_arr[0]+"//"+path_arr[2]+getPreviewHost();}
return host;}
function getOriginalHost(){var host=document.getElementById("host").value+getPreviewHost();return host;}
function getPreviewHost(){var path_arr=document.URL.split("/");var preview_path="";if(path_arr[0]=="http:"&&path_arr[3]=="preview"){preview_path="/preview";}
else if(path_arr[0]=="https:"&&path_arr[4]=="preview"){preview_path="/preview";}
return preview_path;}
function getLoginHost(){return document.getElementById("loginHost").value;}
function getCartHost(){return document.getElementById("cartHost").value;}
function getHostSSL(sslFlg){if(arguments.length<=0||sslFlg==1){return document.getElementById("hostForHttps").value;}
return getHost();}
function getPictureHost(){return document.getElementById("pictureHost").value;}
function getComPictureHost(){var arr=document.getElementById("comPicture").value.split('//');var url=((document.location.protocol=='https:')?'https://':'http://')+arr[1];return url;}
function getSpHost(){var path_arr=document.URL.split('/');var host=path_arr[0]+"//"+path_arr[2]+"/"+path_arr[3];var loginhost=getLoginHost();var carthost=getCartHost();loginhost=loginhost.replace('/preview','');carthost=carthost.replace('/preview','');if(loginhost==host||carthost==host){host=path_arr[0]+"//"+path_arr[2]+"/"+path_arr[3]+"/"+path_arr[4]+getSpPreviewHost();}
else{host=path_arr[0]+"//"+path_arr[2]+"/"+path_arr[3]+getSpPreviewHost();}
return host;}
function getSpPreviewHost(){var path_arr=document.URL.split("/");var preview_path="";if(path_arr[0]=="http:"&&path_arr[4]=="preview"){preview_path="/preview";}
else if(path_arr[0]=="https:"&&path_arr[5]=="preview"){preview_path="/preview";}
return preview_path;}
function getTheme(){return document.getElementById("theme").value;}
function getMessage(messageId,nflg){nflg=nflg||false;var ret="";if(!nflg){if(count=messageId.search(/-/i)+1){ret=messageId.substr(0,count)+document.getElementById(messageId).value;}}else{ret=document.getElementById(messageId).value;}
return ret;}
function getLabel(labelId){return document.getElementById(labelId).value;}
function getLocalLanguage(){return document.getElementById("localLanguage").value;}
$(function(){if($("#errorPop li").length==0){$("#errorPop").css("display","none");}});function setErrorMsg(arrMsg,divWidth){if(arguments.length==2){clearErrorMsg();}else if(arguments.length==3){clearErrorMsg(arguments[2]);}
if(arrMsg==null){return;}
if(arguments.length==2){if(arrMsg.length>0){for(i=0;i<arrMsg.length;i++){divNode=document.getElementById("errorPop");divNode.className="messageArea";divNode.removeAttribute("style");ulNode=document.getElementById("errorList");ulNode.removeAttribute("style");liNode=jQuery(document.createElement("li"));ul2Node=jQuery(document.createElement("ul"));li2Node=jQuery(document.createElement("li"));if(arrMsg[i].indexOf("INFO")!=-1){li2Node.attr("class","infoMsg");li2Node.text(arrMsg[i].substr(5));}else if(arrMsg[i].indexOf("WARN")!=-1){li2Node.attr("class","warnMsg");li2Node.text(arrMsg[i].substr(5));}else if(arrMsg[i].indexOf("CRIT")!=-1){li2Node.attr("class","critMsg");li2Node.text(arrMsg[i].substr(5));}else if(arrMsg[i].indexOf("ERR")!=-1){li2Node.attr("class","errorMsg");li2Node.text(arrMsg[i].substr(4));}else{li2Node.attr("class","errorMsg");li2Node.text(arrMsg[i]);}
liNode.appendTo("#errorList");ul2Node.appendTo(liNode);li2Node.appendTo(ul2Node);}}else if(arrMsg.msg){for(i=0;i<arrMsg.msg.length;i++){divNode=document.getElementById("errorPop");divNode.className="messageArea";divNode.removeAttribute("style");ulNode=document.getElementById("errorList");ulNode.removeAttribute("style");liNode=jQuery(document.createElement("li"));ul2Node=jQuery(document.createElement("ul"));li2Node=jQuery(document.createElement("li"));if(arrMsg.msg[i].indexOf("INFO")!=-1){li2Node.attr("class","infoMsg");li2Node.text(arrMsg.msg[i].substr(5));}else if(arrMsg.msg[i].indexOf("WARN")!=-1){li2Node.attr("class","warnMsg");li2Node.text(arrMsg.msg[i].substr(5));}else if(arrMsg.msg[i].indexOf("CRIT")!=-1){li2Node.attr("class","critMsg");li2Node.text(arrMsg.msg[i].substr(5));}else if(arrMsg.msg[i].indexOf("ERR")!=-1){li2Node.attr("class","errorMsg");li2Node.text(arrMsg.msg[i].substr(4));}else{li2Node.attr("class","errorMsg");li2Node.text(arrMsg.msg[i]);}
liNode.appendTo("#errorList");ul2Node.appendTo(liNode);li2Node.appendTo(ul2Node);}}else{return;}
jQuery("#errorPop").focus();window.scroll(0,0);}else if(arguments.length==3){objUl=jQuery(document.createElement("ul"));objUl.attr("id","errorMessageInfo");if(arrMsg.length>0){for(i=0;i<arrMsg.length;i++){liNode=jQuery(document.createElement("li"));ul2Node=jQuery(document.createElement("ul"));li2Node=jQuery(document.createElement("li"));if(arrMsg[i].indexOf("INFO")!=-1){li2Node.attr("class","infoMsg");li2Node.text(arrMsg[i].substr(5));}else if(arrMsg[i].indexOf("WARN")!=-1){li2Node.attr("class","warnMsg");li2Node.text(arrMsg[i].substr(5));}else if(arrMsg[i].indexOf("CRIT")!=-1){li2Node.attr("class","critMsg");li2Node.text(arrMsg[i].substr(5));}else if(arrMsg[i].indexOf("ERR")!=-1){li2Node.attr("class","errorMsg");li2Node.text(arrMsg[i].substr(4));}else{li2Node.attr("class","errorMsg");li2Node.text(arrMsg[i]);}
liNode.appendTo(objUl);ul2Node.appendTo(liNode);li2Node.appendTo(ul2Node);}}else if(arrMsg.msg){for(i=0;i<arrMsg.msg.length;i++){liNode=jQuery(document.createElement("li"));ul2Node=jQuery(document.createElement("ul"));li2Node=jQuery(document.createElement("li"));if(arrMsg.msg[i].indexOf("INFO")!=-1){li2Node.attr("class","infoMsg");li2Node.text(arrMsg.msg[i].substr(5));}else if(arrMsg.msg[i].indexOf("WARN")!=-1){li2Node.attr("class","warnMsg");li2Node.text(arrMsg.msg[i].substr(5));}else if(arrMsg.msg[i].indexOf("CRIT")!=-1){li2Node.attr("class","critMsg");li2Node.text(arrMsg.msg[i].substr(5));}else if(arrMsg.msg[i].indexOf("ERR")!=-1){li2Node.attr("class","errorMsg");li2Node.text(arrMsg.msg[i].substr(4));}else{li2Node.attr("class","errorMsg");li2Node.text(arrMsg.msg[i].substr(4));}
liNode.appendTo(objUl);ul2Node.appendTo(liNode);li2Node.appendTo(ul2Node);}}else{return;}
jQuery(objUl).prependTo("#"+arguments[2]);jQuery("#"+arguments[2]).focus();window.scroll(0,0);}}
function setErrorMsgHover(arrMsg,divWidth){if(arguments.length==2){clearErrorMsg();}else if(arguments.length==3){clearErrorMsg(arguments[2]);}
if(arrMsg==null){return;}
if(arguments.length==2){if(arrMsg.length>0){for(i=0;i<arrMsg.length;i++){divNode=document.getElementById("errorPop");divNode.className="messageArea";divNode.removeAttribute("style");ulNode=document.getElementById("errorList");ulNode.removeAttribute("style");liNode=jQuery(document.createElement("li"));ul2Node=jQuery(document.createElement("ul"));li2Node=jQuery(document.createElement("li"));if(arrMsg[i].indexOf("INFO")!=-1){li2Node.attr("class","infoMsg");li2Node.text(arrMsg[i].substr(4));}else if(arrMsg[i].indexOf("WARN")!=-1){li2Node.attr("class","warnMsg");li2Node.text(arrMsg[i].substr(4));}else if(arrMsg[i].indexOf("CRIT")!=-1){li2Node.attr("class","critMsg");li2Node.text(arrMsg[i].substr(4));}else if(arrMsg[i].indexOf("ERR")!=-1){li2Node.attr("class","errorMsg");li2Node.text(arrMsg[i].substr(4));}else{li2Node.attr("class","errorMsg");li2Node.text(arrMsg[i].substr(4));}
liNode.appendTo("#errorList");ul2Node.appendTo(liNode);li2Node.appendTo(ul2Node);}}else if(arrMsg.msg){for(i=0;i<arrMsg.msg.length;i++){divNode=document.getElementById("errorPop");divNode.className="messageArea";divNode.removeAttribute("style");ulNode=document.getElementById("errorList");ulNode.removeAttribute("style");liNode=jQuery(document.createElement("li"));ul2Node=jQuery(document.createElement("ul"));li2Node=jQuery(document.createElement("li"));if(arrMsg.msg[i].indexOf("INFO")!=-1){li2Node.attr("class","infoMsg");li2Node.text(arrMsg.msg[i].substr(4));}else if(arrMsg.msg[i].indexOf("WARN")!=-1){li2Node.attr("class","warnMsg");li2Node.text(arrMsg.msg[i].substr(4));}else if(arrMsg.msg[i].indexOf("CRIT")!=-1){li2Node.attr("class","critMsg");li2Node.text(arrMsg.msg[i].substr(4));}else if(arrMsg.msg[i].indexOf("ERR")!=-1){li2Node.attr("class","errorMsg");li2Node.text(arrMsg.msg[i].substr(4));}else{li2Node.attr("class","errorMsg");li2Node.text(arrMsg.msg[i].substr(4));}
liNode.appendTo("#errorList");ul2Node.appendTo(liNode);li2Node.appendTo(ul2Node);}}else{return;}
jQuery("#errorPop").focus();}else if(arguments.length==3){objDIV=document.getElementById(arguments[2]);objDIV.className="messageArea";objDIV.removeAttribute("style");objUl=jQuery(document.createElement("ul"));objUl.attr("id","errorMessageInfo");if(arrMsg.length>0){for(i=0;i<arrMsg.length;i++){liNode=jQuery(document.createElement("li"));ul2Node=jQuery(document.createElement("ul"));li2Node=jQuery(document.createElement("li"));if(arrMsg[i].indexOf("INFO")!=-1){li2Node.attr("class","infoMsg");li2Node.text(arrMsg[i].substr(4));}else if(arrMsg[i].indexOf("WARN")!=-1){li2Node.attr("class","warnMsg");li2Node.text(arrMsg[i].substr(4));}else if(arrMsg[i].indexOf("CRIT")!=-1){li2Node.attr("class","critMsg");li2Node.text(arrMsg[i].substr(4));}else if(arrMsg[i].indexOf("ERR")!=-1){li2Node.attr("class","errorMsg");li2Node.text(arrMsg[i].substr(4));}else{li2Node.attr("class","errorMsg");li2Node.text(arrMsg[i].substr(4));}
liNode.appendTo(objUl);ul2Node.appendTo(liNode);li2Node.appendTo(ul2Node);}}else if(arrMsg.msg){for(i=0;i<arrMsg.msg.length;i++){liNode=jQuery(document.createElement("li"));ul2Node=jQuery(document.createElement("ul"));li2Node=jQuery(document.createElement("li"));if(arrMsg.msg[i].indexOf("INFO")!=-1){li2Node.attr("class","infoMsg");li2Node.text(arrMsg.msg[i].substr(4));}else if(arrMsg.msg[i].indexOf("WARN")!=-1){li2Node.attr("class","warnMsg");li2Node.text(arrMsg.msg[i].substr(4));}else if(arrMsg.msg[i].indexOf("CRIT")!=-1){li2Node.attr("class","critMsg");li2Node.text(arrMsg.msg[i].substr(4));}else if(arrMsg.msg[i].indexOf("ERR")!=-1){li2Node.attr("class","errorMsg");li2Node.text(arrMsg.msg[i].substr(4));}else{li2Node.attr("class","errorMsg");li2Node.text(arrMsg.msg[i].substr(4));}
liNode.appendTo(objUl);ul2Node.appendTo(liNode);li2Node.appendTo(ul2Node);}}else{return;}
jQuery(objUl).prependTo("#"+arguments[2]);jQuery("#"+arguments[2]).focus();}}
function clearErrorMsg(){if(arguments.length==0){$("#errorPop").css("display","none");jQuery("#errorList li").remove();}
if(arguments.length==1){$("#errorPop").css("display","none");jQuery("#"+arguments[0]+" ul[id='errorMessageInfo']").remove();}}
function showErrorMessages(eid,messages,width){var id=eid?eid:"errorPop";var width=width?width:"610px";var messageHTML="<ul class='errorColor'>\n";if(!messages){return;}
if(!$.isArray(messages)){var _msg=messages;messages=new Array();messages[0]=_msg;}
$.each(messages,function(k,v){var cssClass="errorMsg";var message;if(v.match(/^INFO-/)){cssClass="infoMsg";message=v.substr(5);}else if(v.match(/^ERR-/)){cssClass="errorMsg";message=v.substr(4);}else if(v.match(/^WRAN-/)){cssClass="warnMsg";message=v.substr(5);}else if(v.match(/^CRIT-/)){cssClass="critMsg";message=v.substr(5);}else{cssClass="errorMsg";message=v;}
messageHTML=messageHTML+"<li class='"+cssClass+"'>"+message+"</li>\n";});messageHTML=messageHTML+"</ul>\n";$("#"+id).html(messageHTML);$("#"+id).css('display','block');}
function clearErrorMessages(id){var id=id?id:"errorPop";$("#"+id).css("display","none");$("#"+id+" li").remove();}
function pageCreat(curPage,recordCount,pageContainerId){var pageContainer=getPageContainer(pageContainerId);var orderContainerId=null;if(arguments.length<=3){var obj=document.getElementsByName("pager_orderColumn");if(obj.length>1){orderContainerId=pageContainerId.replace("pageHead","orderHead");orderContainerId=orderContainerId.replace("pageFoot","orderHead");}else{orderContainerId="orderDiv";}}else{orderContainerId=arguments[3];}
var pageSize=getPageSize(pageContainerId);if(curPage!=null&&recordCount!=null&&pageSize!=null){var totalPage=parseInt(recordCount/pageSize);if(recordCount%pageSize){totalPage=totalPage+1;}
if(curPage>totalPage){curPage=totalPage;}
var fromRecord=(curPage-1)*pageSize+1;if(fromRecord<0){fromRecord=0;}
var toRecord=curPage*pageSize;if(toRecord>recordCount){toRecord=recordCount;}
if(curPage==0||recordCount==0){jQuery("#curPage",pageContainer).val("0");jQuery("#totalPage",pageContainer).text("0");jQuery("#fromRecord",pageContainer).text("0");jQuery("#toRecord",pageContainer).text("0");jQuery("#recordCount",pageContainer).text("0");}else{jQuery("#curPage",pageContainer).val(curPage.toString());jQuery("#totalPage",pageContainer).text(totalPage.toString());jQuery("#fromRecord",pageContainer).text(fromRecord.toString());jQuery("#toRecord",pageContainer).text(toRecord.toString());jQuery("#recordCount",pageContainer).text(recordCount.toString());}
jQuery("#curPageHid",pageContainer).val(jQuery("#curPage",pageContainer).val());}
else{return;}
if(jQuery("#pagerDiv",pageContainer).attr("flag")==null){jQuery("#pagerDiv",pageContainer).attr("flag","1");jQuery("#curPage",pageContainer).removeAttr("onblur");jQuery("#curPage",pageContainer).blur(function(e){e.preventDefault();if(jQuery("#curPage",pageContainer).val()==jQuery("#curPageHid",pageContainer).val()){return;}
var numPattern=/^\d*$/;result=numPattern.test(jQuery("#curPage",pageContainer).val());if(!result){jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
var curPageText="";var curPageNo;for(i=0;i<jQuery("#curPage",pageContainer).val().length;i++){if(curPageText==""&&jQuery("#curPage",pageContainer).val().substring(i,i+1)==0){}else{curPageText=curPageText+jQuery("#curPage",pageContainer).val().substring(i,i+1);}}
if(curPageText.length>0){curPageNo=parseInt(curPageText);}else{jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
if(curPageNo<1||curPageNo>parseInt(jQuery("#totalPage",pageContainer).text())){jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
jQuery("#curPageHid",pageContainer).val(curPageText);gotoPage(pageContainerId,orderContainerId);});jQuery("#firstPage",pageContainer).removeAttr("onclick");jQuery("#firstPage",pageContainer).click(function(e){e.preventDefault();if(parseInt(jQuery("#curPage",pageContainer).val())<=1){return;}
jQuery("#curPageHid",pageContainer).val("1");firstPage(pageContainerId,orderContainerId);});jQuery("#prePage",pageContainer).removeAttr("onclick");jQuery("#prePage",pageContainer).click(function(e){e.preventDefault();var numPattern=/^\d*$/;result=numPattern.test(jQuery("#curPage",pageContainer).val());if(!result){jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
if(parseInt(jQuery("#curPage",pageContainer).val())<=1){return;}
jQuery("#curPageHid",pageContainer).val((parseInt(jQuery("#curPage",pageContainer).val())-1).toString());prePage(pageContainerId,orderContainerId);});jQuery("#nextPage",pageContainer).removeAttr("onclick");jQuery("#nextPage",pageContainer).click(function(e){e.preventDefault();var numPattern=/^\d*$/;result=numPattern.test(jQuery("#curPage",pageContainer).val());if(!result){jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
if(parseInt(jQuery("#curPage",pageContainer).val())>=parseInt(jQuery("#totalPage",pageContainer).text())){return;}
jQuery("#curPageHid",pageContainer).val((parseInt(jQuery("#curPage",pageContainer).val())+1).toString());nextPage(pageContainerId,orderContainerId);});jQuery("#lastPage",pageContainer).removeAttr("onclick");jQuery("#lastPage",pageContainer).click(function(e){e.preventDefault();if(parseInt(jQuery("#curPage",pageContainer).val())>=parseInt(jQuery("#totalPage",pageContainer).text())){return;}
jQuery("#curPageHid",pageContainer).val(parseInt(jQuery("#totalPage",pageContainer).text()).toString());lastPage(pageContainerId,orderContainerId);});if(navigator.userAgent.toLowerCase().indexOf("firefox")>=0||navigator.userAgent.toLowerCase().indexOf("safari")>=0||navigator.userAgent.toLowerCase().indexOf("opera")>=0){var evt=SearchEvent();if(evt.target.id=="curPage"){jQuery("#"+evt.target.id,pageContainer).blur();}else{jQuery("#"+evt.target.id,pageContainer).click();}}}}
function getPageContainer(pageContainerId){var pageContainer;if(pageContainerId){pageContainer=jQuery("#"+pageContainerId);}else{pageContainer=jQuery(document);}
return pageContainer;}
function initPager(){var pageContainerId=null;if(navigator.userAgent.toLowerCase().indexOf("firefox")>=0||navigator.userAgent.toLowerCase().indexOf("safari")>=0||navigator.userAgent.toLowerCase().indexOf("opera")>=0){var evt=SearchEvent();pageContainerId=jQuery(evt.target).parent().parent().parent().parent().attr("id");}else{pageContainerId=jQuery(window.event.srcElement).parent().parent().parent().parent().attr("id");}
jQuery("#pageFlag",getPageContainer(pageContainerId)).val(0);pageCreatNew(getCurPage(pageContainerId),getDataCount(pageContainerId),null,pageContainerId);}
function gotoPageNo(pageNo){var pageContainerId=null;if(navigator.userAgent.toLowerCase().indexOf("firefox")>=0||navigator.userAgent.toLowerCase().indexOf("safari")>=0||navigator.userAgent.toLowerCase().indexOf("opera")>=0){var evt=SearchEvent();pageContainerId=jQuery(evt.target).parent().parent().parent().attr("id");}else{pageContainerId=jQuery(window.event.srcElement).parent().parent().parent().attr("id");}
var pageContainer=getPageContainer(pageContainerId);jQuery("#curPageHid",pageContainer).val(pageNo);if(pageContainerId){orderContainerId="order"+pageContainerId.replace("page","");}
gotoPage(pageContainerId,orderContainerId);}
function initPagerBlur(){var pageContainerId=null;if(navigator.userAgent.toLowerCase().indexOf("firefox")>=0||navigator.userAgent.toLowerCase().indexOf("safari")>=0||navigator.userAgent.toLowerCase().indexOf("opera")>=0){var evt=SearchEvent();pageContainerId=jQuery(evt.target).parent().parent().attr("id");}else{pageContainerId=jQuery(window.event.srcElement).parent().parent().attr("id");}
var pageContainer=getPageContainer(pageContainerId);if(jQuery("#curPage",pageContainer).val()==jQuery("#curPageHid",pageContainer).val()){return;}
var numPattern=/^\d*$/;result=numPattern.test(jQuery("#curPage",pageContainer).val());if(!result){jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
var curPageText="";var curPageNo;for(i=0;i<jQuery("#curPage",pageContainer).val().length;i++){if(curPageText==""&&jQuery("#curPage",pageContainer).val().substring(i,i+1)==0){}else{curPageText=curPageText+jQuery("#curPage",pageContainer).val().substring(i,i+1);}}
if(curPageText.length>0){curPageNo=parseInt(curPageText);}else{jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
if(curPageNo<1||curPageNo>parseInt(jQuery("#totalPage",pageContainer).text())){jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
jQuery("#curPageHid",pageContainer).val(curPageText);var orderContainerId=null;if(pageContainerId){orderContainerId="order"+pageContainerId.replace("page","");}
gotoPage(pageContainerId,orderContainerId);}
function pageSizeChange(){var pageContainerId=null;if(navigator.userAgent.toLowerCase().indexOf("firefox")>=0||navigator.userAgent.toLowerCase().indexOf("safari")>=0||navigator.userAgent.toLowerCase().indexOf("opera")>=0){var evt=SearchEvent();pageContainerId=jQuery(evt.target).parent().parent().attr("id");}else{pageContainerId=jQuery(window.event.srcElement).parent().parent().attr("id");}
var orderContainerId=null;if(pageContainerId){orderContainerId="order"+pageContainerId.replace("page","");orderContainerId=orderContainerId.replace("Foot","Head");}
tempContainerId=pageContainerId;var pageSize=getPageSize(pageContainerId);if(pageContainerId.indexOf("pageFoot")>=0){pageContainer=getPageContainer(tempContainerId.replace("pageFoot","pageHead"));jQuery("#pageSizeSelect",pageContainer).val(pageSize);}
if(pageContainerId.indexOf("pageHead")>=0){pageContainer=getPageContainer(tempContainerId.replace("pageHead","pageFoot"));jQuery("#pageSizeSelect",pageContainer).val(pageSize);;}
sizeChangeSearch(pageContainerId,orderContainerId);}
function getDataCount(pageContainerId){var pageContainer=getPageContainer(pageContainerId);var dataCount;if(jQuery("#dataCount",pageContainer)!=null&&jQuery("#dataCount",pageContainer).val()!=""){dataCount=parseInt(jQuery("#dataCount",pageContainer).val());}
return dataCount;}
function getCurPage(pageContainerId){var pageContainer=getPageContainer(pageContainerId);var curPage;if(jQuery("#curPageHid",pageContainer)!=null&&jQuery("#curPageHid",pageContainer).val()!=""){curPage=parseInt(jQuery("#curPageHid",pageContainer).val());}
return curPage;}
function getPageSize(pageContainerId){var pageContainer=getPageContainer(pageContainerId);var pageSize;pageSize=jQuery("#pageSizeSelect option:selected",pageContainer).val();return pageSize;}
function getOrderColumn(orderContainerId){var orderContainer=getOrderContainer(orderContainerId);var orderColumn="";if(jQuery("#pager_orderColumn",orderContainer)!=null&&jQuery("#pager_orderColumn",orderContainer).val()!=""){orderColumn=jQuery("#pager_orderColumn",orderContainer).val();}
return orderColumn;}
function getOrder(orderContainerId){var orderContainer=getOrderContainer(orderContainerId);var order="";if(jQuery("#pager_order",orderContainer)!=null&&jQuery("#pager_order",orderContainer).val()!=""){order=jQuery("#pager_order",orderContainer).val();}
return order;}
function initOrder(orderContainerId){var orderContainerId=orderContainerId;if(navigator.userAgent.toLowerCase().indexOf("firefox")>=0||navigator.userAgent.toLowerCase().indexOf("safari")>=0||navigator.userAgent.toLowerCase().indexOf("opera")>=0){var evt=SearchEvent();if(jQuery(evt.target).attr("id")=="ascendon"||jQuery(evt.target).attr("id")=="ascendoff"||jQuery(evt.target).attr("id")=="descendon"||jQuery(evt.target).attr("id")=="descendoff"){orderContainerId=jQuery(evt.target).parent().parent().parent().parent().parent().attr("id");}}else{if(jQuery(window.event.srcElement).attr("id")=="ascendon"||jQuery(window.event.srcElement).attr("id")=="ascendoff"||jQuery(window.event.srcElement).attr("id")=="descendon"||jQuery(window.event.srcElement).attr("id")=="descendoff"){orderContainerId=jQuery(window.event.srcElement).parent().parent().parent().parent().parent().attr("id");}}
setOrderColumn(orderContainerId);}
function setSearchOrder(orderContainerId){if(orderContainerId==""){orderContainerId=null;}
var orderContainer=getOrderContainer(orderContainerId);var trHeader="#trHeader";if(orderContainerId){trHeader=trHeader+"_"+orderContainerId;}
if(jQuery("#pager_order",orderContainer)!=null){jQuery("#pager_order",orderContainer).val("");}
if(jQuery("#pager_orderColumn",orderContainer)!=null){jQuery("#pager_orderColumn",orderContainer).val("");}
jQuery(trHeader).find("td[id]").each(function(){jQuery(this).css("backgroundColor",jQuery(this).attr("preColor"));jQuery(this).attr("flag","0");jQuery(this).find("#asconView").css("display","none");jQuery(this).find("#desconView").css("display","none");});jQuery("#ascendon",orderContainer).css("display","none");jQuery("#ascendoff",orderContainer).css("display","none");jQuery("#descendon",orderContainer).css("display","none");jQuery("#descendoff",orderContainer).css("display","none");}
function getOrderContainer(orderContainerId){var orderContainer;if(orderContainerId){orderContainer=jQuery("#"+orderContainerId);}else{orderContainer=jQuery(document);}
return orderContainer;}
function setOrderColumn(orderContainerId){if(orderContainerId==""){orderContainerId=null;}
var orderContainer=getOrderContainer(orderContainerId);var trHeader="#trHeader";var pageContainerId=null;if(orderContainerId){trHeader=trHeader+"_"+orderContainerId;var obj=document.getElementsByName("pager_orderColumn");if(obj.length>1){pageContainerId=orderContainerId.replace("orderHead","pageHead");}else{pageContainerId="page"+orderContainerId.replace("order","");}}
var pageContainer=getPageContainer(pageContainerId);jQuery("#ascendon",orderContainer).removeAttr("onclick");jQuery("#ascendoff",orderContainer).removeAttr("onclick");jQuery("#descendon",orderContainer).removeAttr("onclick");jQuery("#descendoff",orderContainer).removeAttr("onclick");jQuery(trHeader).find("td[id]").each(function(){jQuery(this).removeAttr("onclick");});var clickColor=jQuery("#clickColor",orderContainer).val();jQuery(trHeader).find("td[id]").each(function(){var order;var orderColumn;if(jQuery(this).attr("preColor")==null){jQuery(this).attr("preColor",jQuery(this).css("backgroundColor"));}
if(jQuery(this).attr("id")==jQuery("#pager_orderColumn").val()){jQuery(this).css("backgroundColor",clickColor);jQuery(this).attr("flag","1");}
jQuery(trHeader).find("td[id='"+jQuery(this).attr("id")+"']").on("click",function(){if(jQuery(this).attr("flag")=="1"){if(jQuery("#ascendon",orderContainer).css("display")=="inline"){order="desc";}else{order="asc";}}else{order="asc";}
jQuery(trHeader).find("td[id]").each(function(){jQuery(this).css("backgroundColor",jQuery(this).attr("preColor"));jQuery(this).attr("flag","0");jQuery(this).find("#asconView").css("display","none");jQuery(this).find("#desconView").css("display","none");});if(order=="asc"){jQuery(this).find("#asconView").css("display","inline");jQuery(this).find("#desconView").css("display","none");jQuery("#ascendon",orderContainer).css("display","inline");jQuery("#ascendoff",orderContainer).css("display","none");jQuery("#descendon",orderContainer).css("display","none");jQuery("#descendoff",orderContainer).css("display","inline");}else{jQuery(this).find("#asconView").css("display","none");jQuery(this).find("#desconView").css("display","inline");jQuery("#ascendon",orderContainer).css("display","none");jQuery("#ascendoff",orderContainer).css("display","inline");jQuery("#descendon",orderContainer).css("display","inline");jQuery("#descendoff",orderContainer).css("display","none");}
jQuery(this).css("backgroundColor",clickColor);jQuery(this).attr("flag","1");if(jQuery("#pager_order",orderContainer)!=null){jQuery("#pager_order",orderContainer).val(order);}
orderColumn=jQuery(this).attr("id");if(jQuery("#pager_orderColumn",orderContainer)!=null){jQuery("#pager_orderColumn",orderContainer).val(orderColumn);}
if(jQuery("#curPageHid",pageContainer)!=null&&jQuery("#curPageHid",pageContainer).val()!="0"){jQuery("#curPageHid",pageContainer).val("1");}
orderSearch(pageContainerId,orderContainerId);});});}
function setTableData(tblId,arrTblData,arrCols,arrColStyle,noHeader,arrRowClass,rowSet){var strTblData="";var strFun;var strTemp;var strArg;var strRowFun;if(noHeader){strTblData="";}else{jQuery("tr ~ tr",jQuery("#"+tblId)).each(function(){jQuery(this).replaceWith("");});jQuery("TBODY ~ TBODY",jQuery("#"+tblId)).each(function(){if(jQuery(this).find("tr").attr("id")!="trHeader"){jQuery(this).replaceWith("");}});strTblData=jQuery("#"+tblId).html();}
for(var i=0;arrTblData[i];i++){var trData="";if(arrRowClass==null||arrRowClass.length==0){trData=trData+"<tr ";}else{trData=trData+"<tr class = '"+arrRowClass[i%arrRowClass.length]+"' ";}
if(rowSet!=null&&rowSet!=""){if(rowSet.indexOf("(")!=-1){var rowLeftIndex=rowSet.indexOf("(");var rowNextIndex=rowSet.indexOf(",");var rowRightIndex=rowSet.indexOf(")");strRowFun=toTrim(rowSet.substring(0,rowLeftIndex+1));strTemp=rowSet.substring(rowLeftIndex+1,rowRightIndex);rowNextIndex=strTemp.indexOf(",");while(rowNextIndex!=-1){strArg=toTrim(strTemp.substring(0,rowNextIndex));if(strArg=="_rowno"){strRowFun=strRowFun+i+",";}else if(strArg=="_rowcount"){strRowFun=strRowFun+arrTblData.length+",";}else{temp=String(arrTblData[i][strArg]);if(temp!=null){temp=htmlTagReplace(temp.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n"));}
strRowFun=strRowFun+"\""+temp+"\",";}
strTemp=strTemp.substring(rowNextIndex+1);rowNextIndex=strTemp.indexOf(",");}
if(toTrim(strTemp)=="_rowno"){strRowFun=strRowFun+i+")";}else if(toTrim(strTemp)=="_rowcount"){strRowFun=strRowFun+arrTblData.length+")";}else{temp=String(arrTblData[i][toTrim(strTemp)]);if(temp!=null){temp=htmlTagReplace(temp.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n"));}
strRowFun=strRowFun+"\""+temp+"\")";}
trData=trData+eval(strRowFun);}else{trData=trData+rowSet;}}
trData=trData+" >";for(var j=0;j<arrCols.length;j++){if(arrColStyle[j].indexOf("'")==-1&&arrColStyle[j].indexOf("=")==-1){trData=trData+"<td style='"+arrColStyle[j]+"'>";}else{trData=trData+"<td "+arrColStyle[j]+" >";}
if(arrCols[j].indexOf("(")!=-1){var leftIndex=arrCols[j].indexOf("(");var nextIndex=arrCols[j].indexOf(",");var rightIndex=arrCols[j].indexOf(")");strFun=toTrim(arrCols[j].substring(0,leftIndex+1));strTemp=arrCols[j].substring(leftIndex+1,rightIndex);nextIndex=strTemp.indexOf(",");while(nextIndex!=-1){strArg=toTrim(strTemp.substring(0,nextIndex));if(strArg=="_rowno"){strFun=strFun+i+",";}else if(strArg=="_rowcount"){strFun=strFun+arrTblData.length+",";}else{var temp=String(arrTblData[i][strArg]);if(temp!=null){temp=htmlTagReplace(temp.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n"));}
strFun=strFun+"\""+temp+"\",";}
strTemp=strTemp.substring(nextIndex+1);nextIndex=strTemp.indexOf(",");}
if(toTrim(strTemp)=="_rowno"){strFun=strFun+i+")";}else if(toTrim(strTemp)=="_rowcount"){strFun=strFun+arrTblData.length+")";}else{temp=String(arrTblData[i][toTrim(strTemp)]);if(temp!=null){temp=htmlTagReplace(temp.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n"));}
strFun=strFun+"\""+temp+"\")";}
trData=trData+eval(strFun);}else{trData=trData+arrTblData[i][arrCols[j]];}
trData=trData+"</td>";}
trData=trData+"</tr>";strTblData=strTblData+trData;}
setInnerHTML(tblId,strTblData);}
function setSortable(arrFromList,arrToList,tagItems,createNode,arrArguments)
{if(tagItems==null||tagItems==""){tagItems="li";}
if(typeof(arrFromList)!="object"){arrFromList=Array(arrFromList);}
if(typeof(arrToList)!="object"){arrToList=Array(arrToList);}
for(var i=0;i<arrFromList.length;i++){var strList={connectWith:[],items:tagItems};for(var j=0;j<arrToList.length;j++){if(arrFromList[i]!=arrToList[j]){strList.connectWith[strList.connectWith.length]="#"+arrToList[j];}}
jQuery("#"+arrFromList[i]).sortable(strList);}
for(var j=0;j<arrToList.length;j++){jQuery("#"+arrToList[j]).sortable({items:tagItems});}
if(createNode!=null){if(typeof(arrArguments)!="object"){arrArguments=Array(arrArguments);}
for(var k=0;k<arrToList.length;k++){jQuery("#"+arrToList[k]).bind("sortreceive",function(event,ui){var arrValues=new Array();for(var i=0;i<arrArguments.length;i++){arrValues.push(ui.item.find("#"+arrArguments[i]).val());}
ui.item.replaceWith(createNode(arrValues));});}}}
function setTransferTable(arrFromList,arrToList,tagItems,createNode,arrArguments)
{if(tagItems==null||tagItems==""){tagItems="li";}
if(typeof(arrFromList)!="object"){arrFromList=Array(arrFromList);}
if(typeof(arrToList)!="object"){arrToList=Array(arrToList);}
for(var i=0;i<arrFromList.length;i++){var strList={connectWith:[],items:tagItems};for(var j=0;j<arrToList.length;j++){if(arrFromList[i]!=arrToList[j]){strList.connectWith[strList.connectWith.length]="#"+arrToList[j];}}
jQuery("#"+arrFromList[i]).find("img").bind("click",function(){var li=jQuery(this).parent().parent().parent().parent().parent();var tr=jQuery(this).parent().parent();if(jQuery(tr).attr("flag")=="1"){return;}
var css=jQuery(li).attr('class');var li_id=jQuery(li).attr('id');var arrValues=new Array();if(createNode!=null){if(typeof(arrArguments)!="object"){arrArguments=Array(arrArguments);}
for(var i=0;i<arrArguments.length;i++){arrValues.push(htmlTagReplace(jQuery("#"+li_id).find("#"+arrArguments[i]).val()));}}
jQuery(tr).attr("flag","1");for(var j=0;j<arrToList.length;j++){objAppend(arrToList[j],createNode(arrValues));}
jQuery(tr).css({"background-color":"#E6E6FA"});});}
for(var j=0;j<arrToList.length;j++){jQuery("#"+arrToList[j]).sortable({items:tagItems});}}
function htmlTagReplace(str){var returnStr=str.replace(eval('/</g'),"&lt;").replace(eval('/>/g'),"&gt;").replace(eval('/"/g'),"&quot;");return returnStr;}
function setSortableStopEvent(objId,stopFun,data){jQuery("#"+objId).bind("sortstop",function(event,ui){stopFun(data,event,ui)});}
function SearchEvent()
{func=SearchEvent.caller;while(func!=null)
{var arg0=func.arguments[0];if(arg0)
{if(arg0.constructor==Event||arg0.constructor==MouseEvent||(typeof(arg0)=="object"&&arg0.preventDefault&&arg0.stopPropagation)){return arg0;}}
func=func.caller;}
return null;}
function createNode(json){var nodeHtml="";for(var i=0;i<json.length;i++){nodeHtml+="<li id='"+json[i].id+"'";if(json[i].type)nodeHtml+=" name='"+json[i].type+"'";if(json[i].open&&json[i].open=="open")nodeHtml+=" class='open'";nodeHtml+="><span";if(json[i].type)nodeHtml+=" class='"+json[i].type+"'";nodeHtml+=">"+json[i].name+"</span>";if(json[i].children){nodeHtml+="<ul>";nodeHtml+=createNode(json[i].children);nodeHtml+="</ul>";nodeHtml+="</li>";}else{nodeHtml+="</li>";}}
return nodeHtml;}
function initTree(divTree,json){var treeHtml;treeHtml="<ul class=\"simpleTree\">";treeHtml+="<li class=\"root\" id=\"root\">";treeHtml+="<ul>";treeHtml+=createNode(json);treeHtml+="</ul>";treeHtml+="</li>";treeHtml+="</ul>";jQuery('#'+divTree).html(treeHtml);}
function getTreeByJsonString(node){var jsonString="";jsonString+="[";$('>ul>li',node).each(function(){if(this.id){jsonString+="{";jsonString+="\"id\":\""+this.id+"\"";jsonString+=",\"name\":\""+$('span:first',this).text()+"\"";if(this.name)jsonString+=",\"type\":\""+this.name+"\"";if(this.className&&this.className.indexOf("open")>-1)jsonString+=",\"open\":\"open\"";if($('>ul',this).size()>0){jsonString+=",\"children\":"+getTreeByJsonString(this);}
jsonString+="},";}});jsonString=jsonString.substring(0,jsonString.length-1);jsonString+="]";return jsonString;}
function getTreeMaxSize(){var treeSize=0;jQuery("#root").find("li").each(function(){if(jQuery(this).attr("id")&&jQuery(this).parents("ul").size()>treeSize){treeSize=jQuery(this).parents("ul").size();}});if(treeSize>0){return treeSize-1;}else{return 0;}}
function closeWindow(){window.opener=null;window.open('','_self');window.close();}
function arrayToJson(array){var json="[";for(var i=0;i<array.length;i++){if(navigator.userAgent.toLowerCase().indexOf("ie")!=-1){temp=array[i].replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/	/g,"    ");}else{temp=array[i].replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/	/g,"    ");}
json+='"'+temp.replace(/"/g,"\\\"")+'"';if(array.length-1!=i){json+=",";}}
json+="]";return json;}
String.prototype.format=function()
{var args=arguments;return this.replace(/\{(\d+)\}/g,function(m,i){return args[i];});}
String.format=function(){if(arguments.length==0)
return null;var str=arguments[0];for(var i=1;i<arguments.length;i++){var re=new RegExp('\\{'+(i-1)+'\\}','gm');str=str.replace(re,arguments[i]);}
return str;}
Number.format=function(val){var s=""+val;s=s.replace(/[\D]/g,"");var p=s.indexOf(".");if(p<0){p=s.length;}
var r=s.substring(p,s.length);for(var i=0;i<p;i++){var c=s.substring(p-1-i,p-1-i+1);if(c<"0"||c>"9"){r=s.substring(0,p-i)+r;break;}
if(i>0&&i%3==0){r=","+r;}
r=c+r;}
return r;}
function showDiv(divId){jQuery(document.createElement('div')).attr('id','divShowBg').css({'position':'absolute','top':'0','left':'0','z-index':'9999','filter':'alpha(opacity=70)','backgroundColor':'#999','opacity':'0.5','width':'100%','height':$(document).height()+'px'}).appendTo('body');var divHeight=jQuery('#'+divId).height();var divWidth=jQuery('#'+divId).width();jQuery('#'+divId).css({'position':'absolute','top':(jQuery(window).height()-divHeight)/2+jQuery(window).scrollTop()+'px','left':(jQuery(window).width()-divWidth)/2+jQuery(window).scrollLeft()+'px','border':'1px solid #cef','zIndex':'10000','backgroundColor':'#fff','height':divHeight,'width':divWidth,'overflow':'hidden'}).show();window.onscroll=function(){jQuery('#'+divId).css({'position':'absolute','top':(jQuery(window).height()-divHeight)/2+jQuery(window).scrollTop()+'px','left':(jQuery(window).width()-divWidth)/2+jQuery(window).scrollLeft()+'px','border':'1px solid #cef','zIndex':'10000','backgroundColor':'#fff','height':divHeight,'width':divWidth,'overflow':'hidden'});};}
function closeDiv(divId){jQuery('#divShowBg').remove();jQuery('#'+divId).hide();}
function fnBreakWordAll(o){var o=o||{},iWord=o.word||13,iRe=o.re||'[a-zA-Z0-9]',bAll=o.all||false,sClassName=o.className||'word-break-all',aEls=o.els||(function(){var aEls=[],aAllEls=document.getElementsByTagName('*'),re=new RegExp('(?:^|\\s+)'+sClassName+'(?:\\s+|$)');for(var i=0,iLen=aAllEls.length;i<iLen;++i){if(re.test(aAllEls[i].className)){aEls[aEls.length]=aAllEls[i];}}
return aEls;})()||[],fnBreakWord=function(oEl){if(!oEl||oEl.nodeType!==1){return false;}else if(oEl.currentStyle&&typeof oEl.currentStyle.wordWrap==='string'){breakWord=function(oEl){oEl.runtimeStyle.wordWrap='break-word';return true;}
return breakWord(oEl);}else if(document.createTreeWalker){var trim=function(str){str=str.replace(/^\s\s*/,'');var ws=/\s/,i=str.length;while(ws.test(str.charAt(--i)));return str.slice(0,i+1);}
breakWord=function(oEl){var dWalker=document.createTreeWalker(oEl,NodeFilter.SHOW_TEXT,null,false);var node,s,c=String.fromCharCode('8203'),re=new RegExp('('+iRe+'{0,'+iWord+'})');while(dWalker.nextNode()){node=dWalker.currentNode;s=trim(node.nodeValue).split(re).join(c);node.nodeValue=s;}
return true;}
return breakWord(oEl);}};for(var i=0,n=aEls.length;i<n;++i){var sUa=navigator.userAgent,sTn=aEls[i].tagName.toLowerCase();if((/Opera/).test(sUa)||(/Firefox/).test(sUa)||((/KHTML/).test(sUa)&&(sTn==='td'||sTn==='th'))||bAll){fnBreakWord(aEls[i]);}}}
function initSelectable(objId,selectedCallBack,width){var obj;obj=$("#"+objId).jQselectable({set:"fadeIn",setDuration:"fast",opacity:.9,width:width,callback:selectedCallBack});return obj;}
var arrChildrenWindows=new Array();function windowOpenOne(strModuleUrl,strGroupName){for(var key in arrChildrenWindows){if(strGroupName==key){if(arrChildrenWindows[key].closed){arrChildrenWindows[key]=window.open(getHost()+"/"+strModuleUrl,strGroupName);}else{}
return;}else{}}
arrChildrenWindows[strGroupName]=window.open(getHost()+"/"+strModuleUrl,strGroupName);}
function logout(){document.getElementById("logoutForm").action=getHost()+"/common/logout/logout";document.getElementById("logoutForm").submit();}
function getImagePath(imageInfo,sizeFlag){var ext;var imageId;var imageName;var tempImageName;var imageFullPath;var imagePath;var arrImageInfo;var arrImageNameInfo;var defaultImagePath=getDefaultImage();var arrImageInfo=new Array();if(imageInfo!=null){arrImageInfo=imageInfo.split("|");if(arrImageInfo[0]==null){imageId="";}else{imageId=arrImageInfo[0];}
if(arrImageInfo[1]==null){imageFullPath="";}else{imageFullPath=arrImageInfo[1];}
if(arrImageInfo[2]==null){imageName="";}else{tempImageName=arrImageInfo[2];arrImageNameInfo=tempImageName.split(".");ext=arrImageNameInfo[1];if(ext!=null){ext=ext.toLowerCase();if(ext=="png"){if(sizeFlag!=0){imageName=arrImageNameInfo[0]+".gif";}else{imageName=arrImageNameInfo[0]+".png";}}else{imageName=arrImageNameInfo[0]+"."+ext;}
imageName=encodeURIComponent(imageName);}else{imageName="";}}
if(imageId!=""&&imageFullPath!=""&&imageName!=""){if(sizeFlag==0){imagePath=imageFullPath+"/"+imageId+"/"+imageName;}else if(sizeFlag==1){imagePath=imageFullPath+"/"+imageId+"/thumbnail/"+imageName;}else if(sizeFlag==2){imagePath=imageFullPath+"/"+imageId+"/item_S/"+imageName;}else if(sizeFlag==3){imagePath=imageFullPath+"/"+imageId+"/item_M/"+imageName;}else if(sizeFlag==4){imagePath=imageFullPath+"/"+imageId+"/item_L/"+imageName;}else if(sizeFlag==5){imagePath=imageFullPath+"/"+imageId+"/item_XL/"+imageName;}else if(sizeFlag==6){imagePath=imageFullPath+"/"+imageId+"/item_XS/"+imageName;}else if(sizeFlag==7){imagePath=imageFullPath+"/"+imageId+"/item_XXL/"+imageName;}else{imagePath=defaultImagePath;}}else{imagePath=defaultImagePath;}}else{imagePath=defaultImagePath;}
arrImageInfo[0]=imagePath;arrImageInfo[1]=imageId;return arrImageInfo;}
function setSubmitDisable(objId){if(objId){var obj=document.getElementById(objId);obj.disabled="disabled";}
createWaitDiv();}
function setSubmitEnable(objId){if(objId){var obj=document.getElementById(objId);if(obj){obj.disabled="";}}
if(jQuery('#divPause')){jQuery('#divPause').remove();}}
function createWaitDiv(){jQuery(document.createElement('div')).attr('id','divPause').css({'position':'absolute','top':'0','left':'0','z-index':'9999','width':"100%",'height':$(document).height()+'px','text-align':'center','font':'bold 24px arial','background-repeat':'no-repeat','background-position':'center','background-attachment':'fixed','background-image':'url(data:image/gif;base64,R0lGODlhAQABAID/AP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)'}).appendTo('body');setTimeout("displayWaitDiv()",500);}
function displayWaitDiv(){jQuery('#divPause').css({'background-image':'url('+getAjaxWaitImage()+')'});}
function toLowerCase(objId){var value=jQuery("#"+objId).val();jQuery("#"+objId).val(value.toLowerCase());}
function mailConvert(objId){}
function domainConvert(objId){toLowerCase(objId);}
function pageCreatNew(curPage,recordCount,page,pageContainerId){var pageContainer=getPageContainer(pageContainerId);var orderContainerId=null;if(arguments.length<=3){var obj=document.getElementsByName("pager_orderColumn");if(obj.length>1){orderContainerId=pageContainerId.replace("pageHead","orderHead");orderContainerId=orderContainerId.replace("pageFoot","orderHead");}else{orderContainerId="orderDiv";}}else{orderContainerId=arguments[3];}
var pageSize=getPageSize(pageContainerId);if(curPage!=null&&recordCount!=null&&pageSize!=null){var totalPage=parseInt(recordCount/pageSize);if(recordCount%pageSize){totalPage=totalPage+1;}
if(curPage>totalPage){curPage=totalPage;}
var fromRecord=(curPage-1)*pageSize+1;if(fromRecord<0){fromRecord=0;}
var toRecord=curPage*pageSize;if(toRecord>recordCount){toRecord=recordCount;}
if(curPage==0||recordCount==0){jQuery("#curPage",pageContainer).val("0");jQuery("#totalPage",pageContainer).text("0");jQuery("#fromRecord",pageContainer).text("0");jQuery("#toRecord",pageContainer).text("0");jQuery("#recordCount",pageContainer).text("0");}else{jQuery("#curPage",pageContainer).val(curPage.toString());jQuery("#totalPage",pageContainer).text(totalPage.toString());jQuery("#fromRecord",pageContainer).text(fromRecord.toString());jQuery("#toRecord",pageContainer).text(toRecord.toString());jQuery("#recordCount",pageContainer).text(recordCount.toString());}
jQuery("#curPageHid",pageContainer).val(jQuery("#curPage",pageContainer).val());if(page!=null){pageLen=page.length;for(i=0;i<pageLen;i++){if(page[i]==curPage){html="<span>"+page[i]+"</span>";}else{html="<a href='javascript:void(0)' onclick = 'javascript:gotoPageNo("+page[i]+")' >"+page[i]+"</a>";}
jQuery("#pageNo"+i,pageContainer).html(html);}
var perPageContent=jQuery("#prePage",pageContainer).html();jQuery(".prev",pageContainer).html(perPageContent);if(parseInt(jQuery("#curPage",pageContainer).val())<=1){var html='<span id="prePage"></span>';}else{var html='<a id="prePage" href="javascript:void(0)" onclick="initPager()"></a>';}
jQuery("#prePageBt",pageContainer).wrap(html);var nextPageContent=jQuery("#nextPage",pageContainer).html();jQuery(".next",pageContainer).html(nextPageContent);if(parseInt(jQuery("#curPage",pageContainer).val())==totalPage){var html='<span id="nextPage"></span>';}else{var html='<a id= "nextPage" href="javascript:void(0)" onclick="initPager()"></a>';}
jQuery("#nextPageBt",pageContainer).wrap(html);}}
else{return;}
if(jQuery("#pageFlag",pageContainer).val()==0){jQuery("#pageFlag",pageContainer).val(1);jQuery("#prePage",pageContainer).removeAttr("onclick");jQuery("#prePage",pageContainer).click(function(e){e.preventDefault();var numPattern=/^\d*$/;result=numPattern.test(jQuery("#curPage",pageContainer).val());if(!result){jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
if(parseInt(jQuery("#curPage",pageContainer).val())<=1){return;}
jQuery("#curPageHid",pageContainer).val((parseInt(jQuery("#curPage",pageContainer).val())-1).toString());prePage(pageContainerId,orderContainerId);});jQuery("#nextPage",pageContainer).removeAttr("onclick");jQuery("#nextPage",pageContainer).click(function(e){e.preventDefault();var numPattern=/^\d*$/;result=numPattern.test(jQuery("#curPage",pageContainer).val());if(!result){jQuery("#curPage",pageContainer).val(jQuery("#curPageHid",pageContainer).val());return;}
if(parseInt(jQuery("#curPage",pageContainer).val())>=parseInt(jQuery("#totalPage",pageContainer).text())){return;}
jQuery("#curPageHid",pageContainer).val((parseInt(jQuery("#curPage",pageContainer).val())+1).toString());nextPage(pageContainerId,orderContainerId);});if(navigator.userAgent.toLowerCase().indexOf("firefox")>=0||navigator.userAgent.toLowerCase().indexOf("safari")>=0||navigator.userAgent.toLowerCase().indexOf("opera")>=0||navigator.userAgent.toLowerCase().indexOf('msie')!=-1){var evt=SearchEvent();if(evt.target.id=="curPage"){jQuery("#"+evt.target.id,pageContainer).blur();}else{jQuery("#"+evt.target.id,pageContainer).click();}}}}
function autoSetValue(objid){document.getElementById(objid).setAttribute('value',getValue(objid));}
function autoCheck(objid){if(true==getChecked(objid)){document.getElementById(objid).setAttribute('checked',getChecked(objid));}else{document.getElementById(objid).removeAttribute('checked');}}
function setImgBtnDisabled(strLiid,strClass){jQuery("#"+strLiid).attr('class',strClass);jQuery("#"+strLiid+" a").attr('href','javascript:void(0)');}
function setImgBtnAbled(strLiid,strClass,strFunName){jQuery("#"+strLiid).attr('class',strClass).on('click',function(){strCallFunc="return "+strFunName;callFunc=new Function(strCallFunc);callFunc();return false;});jQuery("#"+strLiid+" a").attr('href','javascript:void(0);');}
function SetOptionTitle(){var selects=document.getElementsByTagName("select");if(selects.length>0){for(var i=0;i<selects.length;i++){var options=selects[i].options;if(selects[i].options.length>0){for(var j=0;j<options.length;j++){if(options[j].title==""){var tmp=options[j].text;options[j].title=toBreakWord(tmp,80);options[j].style.cssText="width:"+(parseInt(selects[i].style.width.replace("px",""))-28)+"px;overflow-x:hidden;";}}}}}}
function toBreakWord(strContent,intLen){if(strContent.length>intLen){var strTemp="";while(strContent.length>intLen){if(strContent.length>intLen){strTemp+=strContent.substr(0,intLen)+"\r\n";}else{strTemp+=strContent.substr(0,intLen);}
strContent=strContent.substr(intLen,strContent.length);}
if(strContent!=""&&strContent!=null){strTemp+=strContent;}
return strTemp;}else{return strContent;}}
$(document).ready(function(){$("table td ").css({wordWrap:"break-word",wordBreak:"break-all"});})
function htmlspecialchars_decode(strSource){var strDecodeSource='';if(strSource){strDecodeSource=strSource.toString();strDecodeSource=strDecodeSource.replace(/&amp;/g,'&');strDecodeSource=strDecodeSource.replace(/&lt;/g,'<');strDecodeSource=strDecodeSource.replace(/&gt;/g,'>');strDecodeSource=strDecodeSource.replace(/&#039;/g,"'");strDecodeSource=strDecodeSource.replace(/&quot;/g,'"');}
return strDecodeSource;}
if(!('console'in window)){window.console={log:function(){}};}
jQuery(document).ready(function(){var loadicon=new Image();loadicon.src=getComPictureHost()+'/img/loading_icon.gif';var spaceimg=new Image();spaceimg.src=getComPictureHost()+'/image/space.gif';jQuery("img").filter(function(){return jQuery(this).attr("src")=="";}).attr("src",spaceimg.src);});function func_setDisabled(objVal,flag){if(Number(($.fn.jquery).substring(0,1))>=2){objVal.prop("disabled",flag);}else{if(flag==true){objVal.attr("disabled","disabled");}else{objVal.attr("disabled","");}}}
function func_setChecked(objVal,flag){if(Number(($.fn.jquery).substring(0,1))>=2){objVal.prop("checked",flag);}else{if(flag==true){objVal.attr("checked","checked");}else{objVal.attr("checked","");}}}
function func_getChecked(objVal){if(Number(($.fn.jquery).substring(0,1))>=2){return objVal.prop('checked');}else{return objVal.attr('checked');}}
function func_getDisabled(objVal){if(Number(($.fn.jquery).substring(0,1))>=2){return objVal.prop('disabled');}else{return objVal.attr('disabled');}}
function func_setSelected(objVal,flag){if(Number(($.fn.jquery).substring(0,1))>=2){objVal.prop("selected",flag);}else{if(flag==true){objVal.attr("selected","selected");}else{objVal.attr("selected","");}}}