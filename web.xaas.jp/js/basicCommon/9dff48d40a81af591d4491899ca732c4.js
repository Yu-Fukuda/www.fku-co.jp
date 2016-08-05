function chkKanji(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var reg=/^[\u0391-\uFFE5]+$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="";}
return returnValue;}
function chkURL(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var reg=/^((http|https):\/\/)[\d\a-zA-Z\`\-\=\\\[\]\;\'\,\.\/\~\!\@\#\$\%\^\&\*\(\)\_\+\|\{\}\:\"\<\>\?]+$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="ERR-100027";}
return returnValue;}
function chkURL2(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var reg=/^((http|https):\/\/).+$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="ERR-100027";}
return returnValue;}
function chkTel(objId,byVal,allowBlank){if(typeof allowBlank==='undefined'){allowBlank=true;}
var isValueFlag=false;var returnValue=new Array();var value="";if(byVal){value=objId;}else{value=jQuery("#"+objId).val();}
if(typeof value=='undefined'||objId==""){value=objId;}
if(value.length==0){if(allowBlank){returnValue[0]=true;returnValue[1]="";returnValue[2]=1;}else{returnValue[0]=false;returnValue[1]="ERR-100004";returnValue[2]=-1;}}else{if(value.length==11){var reg=/^0[1-9]0[0-9]{8}$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";returnValue[2]=1;}else{returnValue[0]=false;returnValue[1]="ERR-100055";returnValue[2]=0;}}else if(value.length==10){var reg=/^0[1-9]{2}[0-9]{7}$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";returnValue[2]=1;}else{returnValue[0]=false;returnValue[1]="ERR-100055";returnValue[2]=0;}}else if(value.length>11){returnValue[0]=false;returnValue[1]="ERR-100011";returnValue[2]=-2;returnValue[3]=11;}else if(value.length<10){returnValue[0]=false;returnValue[1]="ERR-100010";returnValue[2]=-3;returnValue[3]=10;}else{returnValue[0]=false;returnValue[1]="ERR-100055";returnValue[2]=0;}}
return returnValue;}
function chkPost(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var reg=/^[0-9]{3}[-][0-9]{4}$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="ERR-100056";}
return returnValue;}
function chkIPAddress(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var reg=/^[0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}$/;var result=reg.test(value);if(result==false){returnValue[0]=false;returnValue[1]="ERR-100257";}else{var arrIp=value.split(".");if((parseInt(arrIp[0])>255||parseInt(arrIp[0])==127)||parseInt(arrIp[1])>255||parseInt(arrIp[2])>255||parseInt(arrIp[3])>255){returnValue[0]=false;returnValue[1]="ERR-100257";}else{returnValue[0]=true;returnValue[1]="";}}
return returnValue;}
function chkHyphenTel(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var reg=/^[0-9-]{12,13}$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="ERR-100055";}
return returnValue;}
function chkFax(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var reg=/^[0-9]{10,11}$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="ERR-100131";}
return returnValue;}
function chkMobileTel(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var reg=/^[0-9]{10,11}$/;if(reg.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="ERR-100055";}
return returnValue;}