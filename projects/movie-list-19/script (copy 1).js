// Movie list v.1.1.1
// Mini IMDB
// parse IMDB WATCHLIST.csv

parseList("result", "../../data2/WATCHLIST.csv");


function parseList(printId, fileCsv){
var print = ``;


const response = fetch(fileCsv)
.then(response => response.text())
.catch(err => console.log(err))
//https://jscharting.com/tutorials/js-chart-data/client-side/fetch-csv-and-json/
.then(text => {
//Use CSV text
text = text.split(`
`);

text = text.slice(1);
text.pop();


var movieList = [];

text.forEach(myFunction);
function myFunction(item, key) {



item33 = item.split(`,`);
//print += `<a href="${item[6]}">${item[5]} (${item[10]})<br>`;
//movieList = `<a href="${item[6]}">${item[5]} (${item[10]})<br>`;

// title without quote and comma
var title33 = item33[5];
var url33 = item33[6];
var year33 = item33[10];


//  if title with quote and comma
var titleWithQuoteAndComma = item33[5].split('"');

if(titleWithQuoteAndComma.length >= 2){
titleWithQuoteAndComma = item.split('"');
title33 = titleWithQuoteAndComma[1];

url33 = titleWithQuoteAndComma[2].split(',');
url33 = url33[1];

year33 = titleWithQuoteAndComma[2].split(',');
year33 = year33[5];
}




//get arr for sort
movieList.push({
title: `${title33}`,
data: `<a target="_blank" href="${url33}">${title33} (${year33})<br>`
});

}

//https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
// sort
function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}



var randomMovie = Math.floor(Math.random() * movieList.length);
var randomMovie2 = Math.floor(Math.random() * movieList.length);
var randomMovie3 = Math.floor(Math.random() * movieList.length);

movieList.sort( compare );
//console.log(movieList);

//print data
movieList.forEach(myFunction2);
function myFunction2(item, key) {
print += item['data'];
}

randomMovie = movieList[randomMovie]['data'];
randomMovie2 = movieList[randomMovie2]['data'];
randomMovie3 = movieList[randomMovie3]['data'];
print = `
<b class="block paddingList2 small">Random:</b>
${randomMovie}
${randomMovie2}
${randomMovie3}<br>
<a class="op small paddingList2" href="#" onclick="reload()">[ reload ]</a>

<br><br><span class="block op small paddingList bold">List (total: ${movieList.length}):</span>
${print}
`;


echo(printId, print);

});

function echo(id, text){
document.getElementById(id).innerHTML = `
<div class="wrapperL">${text}</div>
`;
}

}
