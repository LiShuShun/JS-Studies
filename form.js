document.write("<table>");
document.write("<tr><td>appName</td><td>" + navigator.appName + "</td></tr>");
document.write("<tr><td>appCodeName</td><td>" + navigator.appCodeName + "</td></td>");
document.write("<tr><td>appVersion</td><td>" + navigator.appVersion +"</td></tr>");
document.write("<tr><td>language</td><td>" + navigator.language + "</td></tr>");
document.write("<tr><td>cookieEnaled</td><td>" + navigator.cookieEnabled + "</td></tr>");
document.write("<tr><td>cpuClass</td><td>" + navigator.cpuClass + "</td></tr>");
document.write("<tr><td>onLine</td><td>" + navigator.onLine + "</td></tr>");
document.write("<tr><td>platform</td><td>" + navigator.platform + "</td></tr>");
document.write("<tr><td>No of Plugins</td><td>" + navigator.plugins.length + "</td></tr>");
document.write("</table>");
//对浏览器的检测信息；

function datefunction(){
var mydate = new Date();
var year = mydate.getFullYear();	//四位数字表示的年份，比如2012
var month = mydate.getMonth();		//数字表示的月份，0~11,0表示一月，其余类推
var date  = mydate.getDate();		//日期，1~31
var day = mydate.getDay();//星期，0~6,0表示星期日，其余类推
var hours = mydate.getHours();		//时，0~23；
var minutes = mydate.getMinutes();  //分，0~59
var seconds = mydate.getSeconds();	//秒，0~59
document.write(mydate);				
}



