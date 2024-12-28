// v.1.2.1

var geturl = location.href;
var url = new URL(geturl);
var qGMode = url.searchParams.get("mode");


if(qGMode != null&&qGMode != ""){
qGMode = qGMode.trim();
if (qGMode != "staticnotstorage"){
localStorage.setItem('qGMode', qGMode);
}
}

if(qGMode == null||qGMode == ""){ qGMode = localStorage.getItem('qGMode'); }
if(qGMode == null||qGMode == "") { qGMode = "web"; }
if(qGMode == "staticnotstorage"){ qGMode = "static"; }

var qGQ = url.searchParams.get("q");
if (qGQ == null){ qGQ = ""; }
var q = url.searchParams.get("q");
var q2 = url.searchParams.get("q2");
if (q2 == "l"){ qGQ = qGQ + " l"; }

/*delme
let qGQReal = (String(location.href).split("gsc.q=")[1]);
alert(qGQReal.split("&")[0]);
*/

// search 2
// for the command at the end of the search query
let qTmpNoPlus = qGQ.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = qGQ + "#";

switch (qCom) {

case 'l#': case 'll#':
qGQ = q3.replace(qCom, '');
qGQ = qGQ.trim();
qGQ = encodeURIComponent(qGQ);

q = "";

location.href = "/projects/redirects-25/?q=" + qGQ + " l";
break;

default:

}



if(qGQ == null) { qGQ = ""; }
if(qGQ != ''){ qGQ = encodeURIComponent(qGQ); }


// config
var lQModePrint = `<a class="brand tag" href="./?q=">start</a>`;

var lQMode = [
{"name":"Web", "comName":"web", "code":"74e19ee10195d4644"},
{"name":"Latest", "comName":"latest", "code":"974cdfc30e536405d"},
{"name":"Blogs", "comName":"blogs", "code":"653a54ad99a1442eb"},
{"name":"Videos", "comName":"videos", "code":"66e67d2cd1ec94b3b"},
{"name":"Static Sites", "comName":"static", "code":"4015813ba11b24317"},
//{"name":"github.io", "comName":"github", "code":"614f3596881c64f5f"},
//{"name":"pages.dev", "comName":"pages", "code":"c1bb12232f9de476e"},
//{"name":"neocities.org", "comName":"neocities", "code":"a3a8da84c5ed74909"},
{"name":"Custom", "comName":"custom", "code":"2460fb11690ab4ead"},
];



//
//window.addEventListener('load', function() {});

function updateValue(e) {

//log.textContent = e.target.value;
qGQ = e.target.value;
qGQ = encodeURIComponent(qGQ);

lQModePrint = "";
lQModePrint = `<a class="brand tag" href="./?q=">start</a>`;

lQMode.forEach((item, item2) => {
if (item["comName"] == qGMode){
lQModePrint += `
<a class="brand active2 light3 tag border borderRadius2" href="?mode=${item["comName"]}&q=${qGQ}">${item["name"]}</a>
`;
} else {
lQModePrint += `
<a class="brand tag light3 border borderRadius2" href="?mode=${item["comName"]}&q=${qGQ}">${item["name"]}</a>
`;
}
});
document.getElementById("mode").innerHTML = `${lQModePrint}`; 

}




lQMode.forEach((item, item2) => {
if (item["comName"] == qGMode){
lQModePrint += `
<a class="brand active2 light3 tag border borderRadius2" href="?mode=${item["comName"]}&q=${qGQ}">${item["name"]}</a>
`;
} else {
lQModePrint += `
<a class="brand tag light2 border borderRadius2" href="?mode=${item["comName"]}&q=${qGQ}">${item["name"]}</a>
`;
}
});
document.getElementById("mode").innerHTML = `${lQModePrint}`; 


lQMode.forEach((item, item2) => {
if (item["comName"] == qGMode){

document.getElementById("publicUrl").innerHTML = `
<a class="tag2 borderBottomBlue brand" href="https://cse.google.com/cse?cx=${item["code"]}">Public URL</a>
`;

if (q != null&&q != ""){

var script = document.createElement('script');
script.type='text/javascript';
script.async = true;
script.charset = 'utf-8';
script.src = 'https://cse.google.com/cse.js?cx=' + item["code"];      
document.getElementsByTagName('head')[0].appendChild(script);

let printTitle = q.slice(0, 260) + ' - ' + document.getElementsByTagName('title')[0].innerHTML;
document.getElementsByTagName('title')[0].innerHTML = printTitle;

}

}
});





if (q != null&&q != undefined&&document.getElementById("gsc-i-id1") != null){
document.getElementById("gsc-i-id1").value = q;
}



if (document.getElementById("gsc-i-id1") != null){
const input = document.getElementById("gsc-i-id1");
input.addEventListener("input", updateValue);
}

if (document.getElementById("q") != null){
const input2 = document.getElementById("q");
input2.addEventListener("q", updateValue);
}



