(function(){var container=$("script:last").parents("div:first");$(function(){$(container).find(".information_d01").css("overflow","hidden");ajaxRequest(getHost()+"/parts/informationparts/index",null,information_disp_callback);});function information_disp_callback(data){var strHtml='';if(data!=null&&data!=""){strHtml+='<h2>'+data.title+'</h2>';strHtml+='<ul>';if(data.content!=null&&data.content!=""){for(i=0;i<data.content.length;i++){strHtml+='<li><span>'+data.content[i]+'</span></li>';}}
strHtml+='</ul>';}
$(container).find(".information_d01").html(strHtml);if(data!=null&&data!=""){$(container).find(".information_d01").children("ul").css("height","80px");var allImage=$(container).find(".information_d01").children("ul").find("li span img");var cntAllImage=allImage.length;if(cntAllImage==0){information_setScrollbar();}else{var cntCompleteImageload=0;for(var i=0;i<cntAllImage;i++){var $imgTag=$('<img>');$imgTag.load(function(){cntCompleteImageload++;if(cntAllImage==cntCompleteImageload){information_setScrollbar();}}).attr('src',$(allImage[i]).attr('src'));}}}}
function information_setScrollbar(){var arrInfoVal=information_preSetScrollbarCss();if(navigator.userAgent.toLowerCase().indexOf("ie")!=-1){var numUlHeight=$(container).find(".information_d01").children("ul").height();if(Number(($.fn.jquery).substring(0,1))>=2){var numUlScrollHeight=$(container).find(".information_d01").children("ul").prop("scrollHeight");}else{var numUlScrollHeight=$(container).find(".information_d01").children("ul").attr("scrollHeight");}
if(numUlHeight!=null&&numUlScrollHeight!=null&&numUlHeight>0&&numUlScrollHeight>0&&numUlHeight<numUlScrollHeight){$(container).find(".information_d01").children("ul").jScrollPane({mouseWheelSpeed:30,contentWidth:1});}}else{$(container).find(".information_d01").children("ul").jScrollPane({mouseWheelSpeed:30,contentWidth:1});var numPaneHeight=$(container).find(".jspPane").height();var numUlHeight=$(container).find(".information_d01").children("ul").height();if(numPaneHeight!=null&&numUlHeight!=null&&numPaneHeight>0&&numUlHeight>0&&numPaneHeight<=numUlHeight){$(".jspVerticalBar").remove();}}
information_setScrollbarCss(arrInfoVal);}
function information_preSetScrollbarCss(){var arrInfoVal=[];var numVerticalBarWidth=5;$(container).find(".information_d01").removeAttr("overflow");$(container).find(".information_d01").css("-webkit-text-size-adjust","100%");var numInformationWidth=$(container).find(".information_d01").width();var numDiffUlOuterWidth=$(container).find(".information_d01").children("ul").outerWidth(true)-$(container).find(".information_d01").children("ul").width();var numContentsWidth=numInformationWidth-numDiffUlOuterWidth;var numPreContentsWidth=numContentsWidth-numVerticalBarWidth-1;$(container).find(".information_d01").children("ul").css("width",numPreContentsWidth+"px");arrInfoVal["numPreContentsWidth"]=numPreContentsWidth;arrInfoVal["numContentsWidth"]=numContentsWidth;return arrInfoVal;}
function information_setScrollbarCss(arrInfoVal){$(container).find(".information_d01").children("ul").css("width",arrInfoVal["numContentsWidth"]+"px");$(container).find(".jspContainer").css({"width":"100%","height":"100%"});$(container).find(".jspPane").css("width",arrInfoVal["numPreContentsWidth"]+"px");$(container).find(".information_d01").children("ul").find("li:last").css("background-image","none");}})();