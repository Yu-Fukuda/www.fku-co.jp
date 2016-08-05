function chkBlank(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
if(value.length==0){returnValue[0]=false;returnValue[1]="ERR-100004";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkChar(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var charPattern=/^[a-zA-Z]*$/;var result=charPattern.test(value);if(!result){returnValue[0]=false;returnValue[1]="ERR-100250";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkNum(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var result=isNumber(value);if(!result){returnValue[0]=false;returnValue[1]="ERR-100009";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkCharNum(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var charPattern=/^[a-zA-Z0-9]*$/;var result=charPattern.test(value);if(!result){returnValue[0]=false;returnValue[1]="ERR-100015";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkCharNumSign(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var charPattern=/^[0-9a-zA-Z\\\\<>@`,;.:?{}_+*!#$%&'()=~|\"\/\[\]\^\-]+$/;var result=charPattern.test(value);if(!result){returnValue[0]=false;returnValue[1]="";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkSPEChar(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var charPattern=/^[0-9a-zA-Z\.\-]+$/;var result=charPattern.test(value);if(!result){returnValue[0]=false;returnValue[1]="";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkMailString(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var charPattern=/^(([0-9a-zA-Z\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\.\{\|\}\~]+)|([\"][0-9a-zA-Z\!\#\$\%\&\'\*\+\-\/\\\=\?\^\_\`\.\{\|\}\~\(\)\<\>\[ \]\:\;\@\,]*[\"]))@((((([0-9a-zA-Z][0-9a-zA-Z\_\-]*)|([0-9a-zA-Z]))\.)+[a-zA-Z]{2,9})|([0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}))$/;var result=charPattern.test(value);if(!result){returnValue[0]=false;returnValue[1]="ERR-100015";}else if(value.lastIndexOf("@")>64){returnValue[0]=false;returnValue[1]="ERR-100026";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkInt(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var charPattern=/^0$|^[1-9]\d*$/;var result=charPattern.test(value);if(!result){returnValue[0]=false;returnValue[1]="";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkFloat(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length<=2){if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var charPattern=/^0(\.\d+)?$|^[1-9]\d*(\.\d+)?$/;var result=charPattern.test(value);if(!result){returnValue[0]=false;returnValue[1]="";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}else{if(arguments.length>=5){isValueFlag=arguments[4];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var arrFloat=value.split(".");if(arrFloat.length>2){returnValue[0]=false;returnValue[1]="ERR-100370";return returnValue;}
if(value=='-0'){returnValue[0]=false;returnValue[1]="ERR-100370";return returnValue;}
var charPattern="";if(arguments[3]=="+"){var charPattern=/^0$|^[1-9]\d*$/;}else if(arguments[3]=="-"){var charPattern=/^[-]0$|^[-]([1-9]\d*)$/;}else{var charPattern=/^-?0$|^-?([1-9]\d*)$/;}
var result=charPattern.test(arrFloat[0]);arrFloat[0]=arrFloat[0].replace("-","");if(!(result&&getLength(arrFloat[0])<=arguments[1])){returnValue[0]=false;returnValue[1]="ERR-100370";return returnValue;}
if(arrFloat.length==2){if(!(isNumber(arrFloat[1])&&(getLength(arrFloat[1])<=arguments[2])&&getLength(arrFloat[1])>0)){returnValue[0]=false;returnValue[1]="ERR-100370";return returnValue;}}
returnValue[0]=true;returnValue[1]="";return returnValue;}}
function chkMaxLength(objId,max){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=3){isValueFlag=arguments[2];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
if(getLength(value)>max){returnValue[0]=false;returnValue[1]="ERR-100008";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkTextAreaMaxLength(objId,max){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=3){isValueFlag=arguments[2];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
if(getLength(value)>max){returnValue[0]=false;returnValue[1]="ERR-100804";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function compareDate(strStart,strEnd){strStart=strStart.replace("-","/");strStart=strStart.replace("-","/");strEnd=strEnd.replace("-","/");strEnd=strEnd.replace("-","/");arrStart=strStart.split("/");arrEnd=strEnd.split("/");if(parseInt(arrStart[0],10)>parseInt(arrEnd[0],10)||(parseInt(arrStart[0],10)==parseInt(arrEnd[0],10)&&parseInt(arrStart[1],10)>parseInt(arrEnd[1],10))||(parseInt(arrStart[0],10)==parseInt(arrEnd[0],10)&&parseInt(arrStart[1],10)==parseInt(arrEnd[1],10)&&parseInt(arrStart[2],10)>parseInt(arrEnd[2],10))){return false;}else{return true;}}
function chkDate(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
if(!isDate(value)){returnValue[0]=false;returnValue[1]="ERR-100054";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkDateStrictly(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
if(!value.match(/^\d{4}\/\d{2}\/\d{2}$/)){returnValue[0]=false;returnValue[1]="ERR-100054";}else{if(!isDate(value)){returnValue[0]=false;returnValue[1]="ERR-101238";}else{returnValue[0]=true;returnValue[1]="";}}
return returnValue;}
function isDate(value){var year;var month;var day;var dateArr=new Array();if(value.length==10||value.length==9||value.length==8){if(value.substring(4,5)=='/'&&value.substring(7,8)=='/'){dateArr=value.split('/');}else if(value.substring(4,5)=='/'&&value.substring(6,7)=='/'){dateArr=value.split('/');}else{return false;}
year=dateArr[0];month=dateArr[1];day=dateArr[2];if(year.length!=4||!isNumber(year)){return false;}else{if(year>9999||year<1000)return false;}
if(!isNumber(month)){return false;}else{if(month>12||month<1)return false;}
if(!isNumber(day)){return false;}else{if(day>31||day<1)return false;if(month==4&&day>30)return false;if(month==6&&day>30)return false;if(month==9&&day>30)return false;if(month==11&&day>30)return false;var intYear=parseInt(year);var intSecondMonthDay;if(((0==intYear%4)&&!(0==intYear%100))||(0==intYear%400)){intSecondMonthDay=29;}else{intSecondMonthDay=28;}
if(month==2&&day>intSecondMonthDay)return false;}
return true;}else{return false;}}
function getMaxDay(year,month){if(month==4||month==6||month==9||month==11){return"30";}
if(month==2){if(year%4==0&&year%100!=0||year%400==0){return"29";}else{return"28";}}
return"31";}
function isNumber(value){var numPattern=/^\d*$/;result=numPattern.test(value);return result;}
function chkNull(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
if(value==null){returnValue[0]=true;returnValue[1]="04-100050";}else{returnValue[0]=false;returnValue[1]="";}
return returnValue;}
function chkMinLength(objId,length){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=3){isValueFlag=arguments[2];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
if(getLength(value)<length){returnValue[0]=false;returnValue[1]="ERR-100007";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}
function chkMoney(objId,integerLength,decimalLegth){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=4){isValueFlag=arguments[3];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var arrMoney=value.split(".");if(arrMoney.length>2){returnValue[0]=false;returnValue[1]="ERR-100007";return returnValue;}
for(;arrMoney[0].indexOf(',')>=0;){arrMoney[0]=arrMoney[0].replace(",","");}
var charPattern=/^0$|^[1-9]\d*$/;var result=charPattern.test(arrMoney[0]);if(!(result&&getLength(arrMoney[0])<=integerLength)){returnValue[0]=false;returnValue[1]="ERR-100007";return returnValue;}
if(arrMoney.length==2){if(!(isNumber(arrMoney[1])&&(getLength(arrMoney[1])<=decimalLegth))){returnValue[0]=false;returnValue[1]="ERR-100007";return returnValue}}
returnValue[0]=true;returnValue[1]="";return returnValue;}
function chkZenKana(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var zen=/^[アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダジヂスヅデドナニヌネノハヒフヘホバビブベボマミムメモヤユヨラリルレロワヲンァィゥェォッャュョ 　-]*$/;if(zen.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="";}
return returnValue;}
function chkHiraKana(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var zen=/^[　 ーぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょらよりるれろゎわゐゑをんゔ゛゜ゝゞ]*$/
if(zen.test(value)){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="ERR-100309";}
return returnValue;}
function chkHanKana(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
result=HanKanachker(value);if(result){returnValue[0]=true;returnValue[1]="";}else{returnValue[0]=false;returnValue[1]="ERR-100057";}
return returnValue;}
function HanKanachker(chk){var hankana="｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ"
for(i=0;i<chk.length;i++){if(hankana.indexOf(chk.charAt(i),0)>=0)
return false;}
return true;}
function chkMobileMailString(objId){var isValueFlag=false;var returnValue=new Array();var value="";if(arguments.length>=2){isValueFlag=arguments[1];}else{}
if(isValueFlag){value=objId;}else{value=jQuery("#"+objId).val();}
var charPattern=/^(([0-9a-zA-Z\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\.\{\|\}\~]+)|([\"][0-9a-zA-Z\!\#\$\%\&\'\*\+\-\/\\\=\?\^\_\`\.\{\|\}\~\(\)\<\>\[ \]\:\;\@\,]*[\"]))@((((([0-9a-zA-Z][0-9a-zA-Z\_\-]*)|([0-9a-zA-Z]))\.)+[a-zA-Z]{2,9})|([0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}[.][0-9]{1,3}))$/;var result=charPattern.test(value);if(!result||getLength(value)>256||value.lastIndexOf("@")>64){returnValue[0]=false;returnValue[1]="ERR-100015";}else{returnValue[0]=true;returnValue[1]="";}
return returnValue;}