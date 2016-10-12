/*https://www.youtube.com/watch?v=gwTkd52Dm48&feature=youtu.be*/
/*https://www.youtube.com/watch?v=ot5h1FFy7jk&feature=youtu.be*/

var jcontent = {
	"firstName": "John",
	"lastName": "Smith"
}

var output = document.getElementById("output");
output.innerHTML = jcontent.firstName + " " + jcontent.lastName;
var ajaxhttp = new XMLHttpRequest();
var adresUrl = "XXXXXXXXXXXXXXXXXXXXXXXXXX.json";

ajaxhttp.open("GET", adresUrl, true); //True odnosnie synchronizacji.
ajaxhttp.setRequestHeader("content-type","aplication/json");  //Request Header Value that it is send to the server, we are indicating content type what we expect to receive.
ajaxhttp.onreadystatechange = function () { //Adding respone lisner. When our request is opened and when we are reciving respond from server this event will start. When it does fire off we will set a function to run. 
    if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200) {
        var jcontent = ajaxhttp;
        console.log(jcontent);
        console.log(ajaxhttp);
    }

}
console.log(ajaxhttp);