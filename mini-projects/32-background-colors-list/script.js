// Bg list v.1.0.0


function fuLPrintBgRun(varLTheme){

let lAllBgColorsLight = {
"light blue":"#E9ECF0",
"light green":"#E8EBE4",
"light":"#F0F0F0",
"light olive":"#EBEBE4",
"light orange":"#EBE8E4",
"light pink":"#EBE4EB",
"light plum":"#EBE4E8",
"light purple":"#E9E4EB",
"light red":"#F0E9E9",
"light sea":"#E4EBEB",
"light SeaShell":"#FFF5EE",
"light violet":"#E6E4EB",
"light yellow":"#EBEAE4",
"medium green":"#BCEBBC",
"medium lime":"#D0EBBC",
"medium mint":"#BCEBD2",
"medium olive":"#DCEBBC",
"medium orange":"#EBDBBC",
"medium pink":"#FFE6E6",
"medium plum":"#EBD3DF",
"medium purple":"#E8D3EB",
"medium sea":"#BCDFEB",
"medium silver":"#EBEBEB",
"medium violet":"#EAE4F2",
"medium yellow":"#EBE5BC",
}

let lAllBgColorsDark = {
"medium dark blue":"#2E4473",
"medium dark brown":"#573625",
"medium dark forest":"#255742",
"medium dark gray":"#4A4A4A",
"medium dark green":"#255729",
"medium dark olive":"#4F5725",
"medium dark pink":"#732E63",
"medium dark plum":"#5E2743",
"medium dark purple":"#582863",
"medium dark red":"#5E2727",
"medium dark sea":"#285963",
"medium dark slate":"#24594E",
"medium dark violet":"#3E275E",
"medium dark yellow":"#5E5A27",
"dark":"#2D2D2E",
"dark blue":"#34363B",
"dark green":"#343B39",
"dark orange":"#3B3834",
"dark pink":"#3A343B",
"dark plum":"#3B3438",
"dark purple":"#3B3A34",
"dark red":"#3B3435",
"dark sea":"#343B3B",
"dark violet":"#38343B",
"dark yellow":"#3B3A34",
}


//if(varLTheme == 'light'){}
let lAllBgColorsLightArr = Object.getOwnPropertyNames(lAllBgColorsLight);
lAllBgColorsLightArr.forEach((item, index) => {
if(document.getElementById("lPrintBg") != null){
document.getElementById("lPrintBg").innerHTML += `
<div class="lBlock" style="border: 1px solid #A4A4A4; color: #000; background-color: ${lAllBgColorsLight[item]};">
<div>${item}<b><br>${item}</b><br><br>${lAllBgColorsLight[item]}</div>
</div>

`;
}
});


//if(varLTheme == 'dark'){}
let lAllBgColorsDarkArr2 = Object.getOwnPropertyNames(lAllBgColorsDark);
lAllBgColorsDarkArr2.forEach((item, index) => {
if(document.getElementById("lPrintBg2") != null){
document.getElementById("lPrintBg2").innerHTML += `
<div class="lBlock" style="border: 1px solid #191919; color: #fff; background-color: ${lAllBgColorsDark[item]};">
<div>${item}<b><br>${item}</b><br><br>${lAllBgColorsDark[item]}</div>
</div>

`;
}
});




}

fuLPrintBgRun();
