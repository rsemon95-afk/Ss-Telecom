//=====================================================
// SS TELECOM MANAGEMENT SYSTEM
// APP.JS (PART-1)
//=====================================================

//=============================
// LIVE DATE & TIME
//=============================

function updateClock() {

    const now = new Date();

    document.getElementById("liveTime").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("liveDate").innerHTML =
        now.toLocaleDateString();

}

setInterval(updateClock, 1000);

updateClock();


//=============================
// MASTER DATA
//=============================

let data = {

    easyload: 0,

    mobileBanking: 0,

    productBuy: 0,

    productSale: 0,

    cardBuy: 0,

    cardSale: 0,

    barbarizeBuy: 0,

    barbarizeSale: 0,

    dailyProfit: 0,

    monthlyProfit: 0,

    totalSales: 0,

    stockBalance: 0,

    currentAssets: 0,

    openingAmount: 30000,

    transactions: []

};


//=============================
// LOAD SAVED DATA
//=============================

if (localStorage.getItem("ssTelecom")) {

    data = JSON.parse(localStorage.getItem("ssTelecom"));

}


//=============================
// SAVE DATA
//=============================

function saveData() {

    localStorage.setItem(

        "ssTelecom",

        JSON.stringify(data)

    );

}


//=============================
// UPDATE DASHBOARD
//=============================

function updateDashboard() {

    document.getElementById("easyloadStock").innerHTML =
        data.easyload;

    document.getElementById("productBuy").innerHTML =
        data.productBuy;

    document.getElementById("productSale").innerHTML =
        data.productSale;

    document.getElementById("barbarizeBuy").innerHTML =
        data.barbarizeBuy;

    document.getElementById("barbarizeSale").innerHTML =
        data.barbarizeSale;

    document.getElementById("dailyProfit").innerHTML =
        data.dailyProfit;

    document.getElementById("monthlyProfit").innerHTML =
        data.monthlyProfit;

    document.getElementById("stockBalance").innerHTML =
        data.stockBalance;

    document.getElementById("currentAssets").innerHTML =
        data.currentAssets;

    document.getElementById("totalSales").innerHTML =
        data.totalSales;

    document.getElementById("profitLoss").innerHTML =
        data.dailyProfit;

    document.getElementById("cardStock").innerHTML =
        data.cardBuy - data.cardSale;

}


//=============================
// START
//=============================

updateDashboard();
//=====================================================
// APP.JS (PART-2)
// SAVE SYSTEM
//=====================================================


//=====================================
// FLEXI LOAD SAVE
//=====================================

const saveFlexiBtn = document.getElementById("saveFlexi");

if(saveFlexiBtn){

saveFlexiBtn.addEventListener("click",()=>{

let gp = Number(document.getElementById("gpBalance").value)||0;

let robi = Number(document.getElementById("robiBalance").value)||0;

let bl = Number(document.getElementById("blBalance").value)||0;

let airtel = Number(document.getElementById("airtelBalance").value)||0;

let total = gp+robi+bl+airtel;

data.easyload += total;

data.transactions.push({

type:"Flexi Load",

gp:gp,

robi:robi,

banglalink:bl,

airtel:airtel,

total:total,

date:new Date().toLocaleString()

});

document.getElementById("gpBalance").value="";

document.getElementById("robiBalance").value="";

document.getElementById("blBalance").value="";

document.getElementById("airtelBalance").value="";

saveData();

updateDashboard();

});

}



//=====================================
// MOBILE BANKING SAVE
//=====================================

const saveBankBtn=document.getElementById("saveBanking");

if(saveBankBtn){

saveBankBtn.addEventListener("click",()=>{

let bkash=Number(document.getElementById("bkashBalance").value)||0;

let nagad=Number(document.getElementById("nagadBalance").value)||0;

let rocket=Number(document.getElementById("rocketBalance").value)||0;

let upay=Number(document.getElementById("upayBalance").value)||0;

let total=bkash+nagad+rocket+upay;

data.mobileBanking+=total;

data.transactions.push({

type:"Mobile Banking",

bkash:bkash,

nagad:nagad,

rocket:rocket,

upay:upay,

total:total,

date:new Date().toLocaleString()

});

document.getElementById("bkashBalance").value="";

document.getElementById("nagadBalance").value="";

document.getElementById("rocketBalance").value="";

document.getElementById("upayBalance").value="";

saveData();

updateDashboard();

});

}
//=====================================================
// APP.JS (PART-3)
// PRODUCT | CARD | BARBARIZE
//=====================================================


//=====================================
// PRODUCT SAVE
//=====================================

const saveProductBtn=document.getElementById("saveProduct");

if(saveProductBtn){

saveProductBtn.addEventListener("click",()=>{

let buy=Number(document.getElementById("productBuyInput").value)||0;

let sale=Number(document.getElementById("productSaleInput").value)||0;

let profit=sale-buy;

// Dashboard Total

data.productBuy+=buy;

data.productSale+=sale;

data.dailyProfit+=profit;

data.monthlyProfit+=profit;

data.totalSales+=sale;

// Transaction

data.transactions.push({

type:"Product",

buy:buy,

sale:sale,

profit:profit,

date:new Date().toLocaleString()

});

// Clear

document.getElementById("productBuyInput").value="";

document.getElementById("productSaleInput").value="";

document.getElementById("productProfit").innerHTML="0";

saveData();

updateDashboard();

});

}



//=====================================
// CARD SAVE
//=====================================

const saveCardBtn=document.getElementById("saveCard");

if(saveCardBtn){

saveCardBtn.addEventListener("click",()=>{

let buy=Number(document.getElementById("cardBuyInput").value)||0;

let sale=Number(document.getElementById("cardSaleInput").value)||0;

// Total

data.cardBuy+=buy;

data.cardSale+=sale;

// Transaction

data.transactions.push({

type:"Card",

buy:buy,

sale:sale,

stock:data.cardBuy-data.cardSale,

date:new Date().toLocaleString()

});

// Clear

document.getElementById("cardBuyInput").value="";

document.getElementById("cardSaleInput").value="";

document.getElementById("cardCurrentStock").innerHTML="0";

saveData();

updateDashboard();

});

}



//=====================================
// BARBARIZE SAVE
//=====================================

const saveBarBtn=document.getElementById("saveBarbarize");

if(saveBarBtn){

saveBarBtn.addEventListener("click",()=>{

let buy=Number(document.getElementById("barbarizeBuyInput").value)||0;

let sale=Number(document.getElementById("barbarizeSaleInput").value)||0;

let profit=sale-buy;

// Total

data.barbarizeBuy+=buy;

data.barbarizeSale+=sale;

data.dailyProfit+=profit;

data.monthlyProfit+=profit;

data.totalSales+=sale;

// Transaction

data.transactions.push({

type:"Barbarize",

buy:buy,

sale:sale,

profit:profit,

date:new Date().toLocaleString()

});

// Clear

document.getElementById("barbarizeBuyInput").value="";

document.getElementById("barbarizeSaleInput").value="";

document.getElementById("barbarizeProfit").innerHTML="0";

saveData();

updateDashboard();

});

}



//=====================================
// SYSTEM CALCULATION
//=====================================

function calculateSystem(){

data.currentAssets=

data.easyload+

data.mobileBanking+

(data.cardBuy-data.cardSale)+

data.productSale+

data.barbarizeSale;


data.stockBalance=

data.openingAmount-data.currentAssets;

updateDashboard();

saveData();

}



//=====================================
// AUTO UPDATE
//=====================================

setInterval(calculateSystem,500);
//============================================
// APP.JS PART-4
// TRANSACTION | BACKUP | RESET
//============================================


//=============================
// TRANSACTION BUTTON
//=============================

const transactionBtn=document.getElementById("transactionBtn");

if(transactionBtn){

transactionBtn.addEventListener("click",()=>{

let history="";

data.transactions.forEach((item,index)=>{

history+=
(index+1)+". "
+item.type+
"\nDate : "+item.date+
"\n"+JSON.stringify(item)+
"\n\n";

});

if(history===""){

history="No Transaction Found";

}

alert(history);

});

}



//=============================
// BACKUP BUTTON
//=============================

const backupBtn=document.getElementById("backupBtn");

if(backupBtn){

backupBtn.addEventListener("click",()=>{

const backup=JSON.stringify(data,null,2);

const blob=new Blob([backup],{

type:"application/json"

});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="SS_TELECOM_BACKUP.json";

link.click();

});

}



//=============================
// RESET FUNCTION
//=============================

function resetSystem(){

data={

easyload:0,

mobileBanking:0,

productBuy:0,

productSale:0,

cardBuy:0,

cardSale:0,

barbarizeBuy:0,

barbarizeSale:0,

dailyProfit:0,

monthlyProfit:0,

totalSales:0,

stockBalance:0,

currentAssets:0,

openingAmount:30000,

transactions:[]

};

saveData();

updateDashboard();

}



//=============================
// OPENING AMOUNT
//=============================

const opening=document.getElementById("openingAmount");

if(opening){

opening.addEventListener("change",()=>{

data.openingAmount=

Number(opening.value)||30000;

calculateSystem();

saveData();

});

}



//=============================
// LOAD OPENING AMOUNT
//=============================

if(opening){

opening.value=data.openingAmount;

}



//=============================
// SOFTWARE START
//=============================

calculateSystem();

updateDashboard();

console.log("SS TELECOM READY");
