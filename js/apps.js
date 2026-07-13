//========================================
// SS TELECOM MANAGEMENT SYSTEM
// Phase 3.1
//========================================


//===============================
// LIVE DATE & TIME
//===============================

function updateClock(){

    const now = new Date();

    document.getElementById("liveTime").innerHTML =
        now.toLocaleTimeString();

    document.getElementById("liveDate").innerHTML =
        now.toLocaleDateString();

}

setInterval(updateClock,1000);

updateClock();


//===============================
// FLEXILOAD SAVE
//===============================

const saveFlexi = document.getElementById("saveFlexi");

saveFlexi.addEventListener("click",()=>{

    gpBalance.value="";
    robiBalance.value="";
    blBalance.value="";
    airtelBalance.value="";

    alert("Flexi Load Saved Successfully");

});



//===============================
// MOBILE BANKING SAVE
//===============================

const saveBanking = document.getElementById("saveBanking");

saveBanking.addEventListener("click",()=>{

    bkashBalance.value="";
    nagadBalance.value="";
    rocketBalance.value="";
    upayBalance.value="";

    alert("Mobile Banking Saved Successfully");

});
//========================================
// PHASE 3.2
// PRODUCT | CARD | BARBARIZE
//========================================


//===============================
// PRODUCT SAVE
//===============================

const saveProduct = document.getElementById("saveProduct");

if(saveProduct){

saveProduct.addEventListener("click",()=>{

let buy=document.getElementById("productBuyInput").value;
let sale=document.getElementById("productSaleInput").value;

buy=Number(buy);
sale=Number(sale);

let profit=sale-buy;

document.getElementById("productProfit").innerHTML=profit;

document.getElementById("productBuyInput").value="";
document.getElementById("productSaleInput").value="";

alert("Product Saved Successfully");

});

}



//===============================
// CARD SAVE
//===============================

const saveCard=document.getElementById("saveCard");

if(saveCard){

saveCard.addEventListener("click",()=>{

let buy=document.getElementById("cardBuyInput").value;
let sale=document.getElementById("cardSaleInput").value;

buy=Number(buy);
sale=Number(sale);

let stock=buy-sale;

document.getElementById("cardCurrentStock").innerHTML=stock;

document.getElementById("cardBuyInput").value="";
document.getElementById("cardSaleInput").value="";

alert("Card Saved Successfully");

});

}



//===============================
// BARBARIZE SAVE
//===============================

const saveBarbarize=document.getElementById("saveBarbarize");

if(saveBarbarize){

saveBarbarize.addEventListener("click",()=>{

let buy=document.getElementById("barbarizeBuyInput").value;
let sale=document.getElementById("barbarizeSaleInput").value;

buy=Number(buy);
sale=Number(sale);

let profit=sale-buy;

document.getElementById("barbarizeProfit").innerHTML=profit;

document.getElementById("barbarizeBuyInput").value="";
document.getElementById("barbarizeSaleInput").value="";

alert("Barbarize Saved Successfully");

});

}
//========================================
// PHASE 3.3
// DASHBOARD AUTO UPDATE SYSTEM
//========================================

// Dashboard Total Variable

let easyloadTotal = 0;

let productBuyTotal = 0;
let productSaleTotal = 0;

let cardStockTotal = 0;

let barbarizeBuyTotal = 0;
let barbarizeSaleTotal = 0;


//========================================
// FLEXILOAD DASHBOARD
//========================================

saveFlexi.addEventListener("click",()=>{

let gp=Number(gpBalance.value)||0;
let robi=Number(robiBalance.value)||0;
let bl=Number(blBalance.value)||0;
let airtel=Number(airtelBalance.value)||0;

easyloadTotal=gp+robi+bl+airtel;

document.getElementById("easyloadStock").innerHTML=easyloadTotal;

});


//========================================
// PRODUCT DASHBOARD
//========================================

if(saveProduct){

saveProduct.addEventListener("click",()=>{

let buy=Number(document.getElementById("productBuyInput").value)||0;

let sale=Number(document.getElementById("productSaleInput").value)||0;

productBuyTotal+=buy;
productSaleTotal+=sale;

document.getElementById("productBuy").innerHTML=productBuyTotal;

document.getElementById("productSale").innerHTML=productSaleTotal;

});

}


//========================================
// CARD DASHBOARD
//========================================

if(saveCard){

saveCard.addEventListener("click",()=>{

let buy=Number(cardBuyInput.value)||0;

let sale=Number(cardSaleInput.value)||0;

cardStockTotal+=(buy-sale);

document.getElementById("cardStock").innerHTML=cardStockTotal;

});

}


//========================================
// BARBARIZE DASHBOARD
//========================================

if(saveBarbarize){

saveBarbarize.addEventListener("click",()=>{

let buy=Number(barbarizeBuyInput.value)||0;

let sale=Number(barbarizeSaleInput.value)||0;

barbarizeBuyTotal+=buy;
barbarizeSaleTotal+=sale;

document.getElementById("barbarizeBuy").innerHTML=barbarizeBuyTotal;

document.getElementById("barbarizeSale").innerHTML=barbarizeSaleTotal;

});

}
//========================================
// PHASE 3.4
// PROFIT / LOSS SYSTEM
//========================================

// Opening Amount
let openingAmount = Number(document.getElementById("openingAmount").value) || 30000;


// হিসাব আপডেট করার Function

function updateSystemDashboard(){

    // Dashboard Value

    let easyload = easyloadTotal;

    let productSale = productSaleTotal;

    let productBuy = productBuyTotal;

    let cardStock = cardStockTotal;

    let barbarizeSale = barbarizeSaleTotal;

    let barbarizeBuy = barbarizeBuyTotal;


    // Total Sales

    let totalSales =
        productSale +
        barbarizeSale;


    // Current Assets

    let currentAssets =
        easyload +
        cardStock +
        totalSales;


    // Profit

    let totalProfit =
        (productSale-productBuy)
        +
        (barbarizeSale-barbarizeBuy);


    // Stock Balance

    let stockBalance =
        openingAmount-currentAssets;


    // Dashboard Update

    document.getElementById("stockBalance").innerHTML=stockBalance;

    document.getElementById("totalSales").innerHTML=totalSales;

    document.getElementById("dailyProfit").innerHTML=totalProfit;

    document.getElementById("monthlyProfit").innerHTML=totalProfit;

    document.getElementById("currentAssets").innerHTML=currentAssets;

    document.getElementById("profitLoss").innerHTML=totalProfit;

    document.getElementById("currentAssetValue").innerHTML=currentAssets;

    document.getElementById("profitLossValue").innerHTML=totalProfit;

}



//========================================
// AUTO UPDATE
//========================================

saveFlexi.addEventListener("click",updateSystemDashboard);

if(saveProduct)
saveProduct.addEventListener("click",updateSystemDashboard);

if(saveCard)
saveCard.addEventListener("click",updateSystemDashboard);

if(saveBarbarize)
saveBarbarize.addEventListener("click",updateSystemDashboard);
