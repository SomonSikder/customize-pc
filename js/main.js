//   founction for each even            
function extraConfigurationCost(extraCostId,amount){
    const extraProductText = document.getElementById(extraCostId);
    extraProductText.innerText = amount;

}

function addTotal(){
    const total= document.getElementById('total-price');
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryCost8gb = document.getElementById("extra-memory").innerText;
    const extraStorage = document.getElementById("extra-storage").innerText;
    const deliveryCost = document.getElementById("delivery-cost").innerText;
    const totalAmount= document.getElementById("total-amount");

    total.innerText=parseInt(bestPrice)+parseInt(memoryCost8gb)+parseInt(extraStorage)+parseInt(deliveryCost);
    totalAmount.innerText=parseInt(bestPrice)+parseInt(memoryCost8gb)+parseInt(extraStorage)+parseInt(deliveryCost);
    
}

// Memory event handler
document.getElementById("memory-16gb").addEventListener('click',function(){
    
    const memoryCost16gb = extraConfigurationCost('extra-memory',180);
    addTotal();
    
}) 

document.getElementById('memory-8gb').addEventListener('click',function(){
    
    const memoryCost8gb = extraConfigurationCost('extra-memory',0);
    addTotal();
     
})  

// Storage event handler
document.getElementById('storage-256gb').addEventListener('click',function(){
   const storageCost256gb = extraConfigurationCost("extra-storage",0);
   addTotal();
  
})

document.getElementById('storage-512gb').addEventListener('click',function(){
    const storageCost512gb = extraConfigurationCost("extra-storage",100);
    addTotal();
})

document.getElementById('storage-1tb').addEventListener('click',function(){
    const storageCost1tb=extraConfigurationCost("extra-storage",180);
    addTotal();
})    

//  Delivery event handler
document.getElementById('delivery-free').addEventListener('click',function(){
    const deliveryCost = extraConfigurationCost("delivery-cost",0);
    addTotal();
    
}) 
document.getElementById("delivey-charge").addEventListener('click',function(){
    const deliveryCost = extraConfigurationCost("delivery-cost",20);
    addTotal();
    
})

// Promo code Apply part
document.getElementById('apply-btn').addEventListener('click',function(){
    addTotal();
    const totalText = document.getElementById("total-amount")
    const totalPrice=parseInt(totalText.innerText)
    const promoInput = document.getElementById('promo-code');
    const promoInputValue=promoInput.value;
    if(promoInputValue=="stevekaku"){
        const amountDiscount=totalPrice - totalPrice*.2;
        totalText.innerText=amountDiscount;
        promoInput.value='';
    }
})
