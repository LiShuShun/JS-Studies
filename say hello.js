alert("this is my message"); 
//alert没有返回值；
var answer = confirm("Are You happy to continue?");
//confirm 与 alert相似，也是需要的消息作为参数；不同的是
//可以吧返回的值（真或假）赋给一个变量，之后程序就可以根据这
//个值进行相应的操作
var answer = prompt("what is your full name?" , "John Doe");


function myfunction(){
document.getElementById("div1").innerHTML = "<p>this is some new text instead</p>"
}
//执行上述代码会删除div之前的HTML内容，并且以新的字符串代替

alert("you're visited" + history.length + "web pages in this browser session");

history.forward(); //历史列表的前一个页面
history.backward(); //历史列表的后一个页面
history.go(-3); //后退3个页面
history.go(2);	//前进2个页面
history.go("example.com");	//到达历史记录列表里面第一个包含"example.com"的URL

location.replace('www.baidu.com');
//这样浏览器的历史记录列表里都使用新的URL来代替旧的
location.reload();
document.reload(ture);
