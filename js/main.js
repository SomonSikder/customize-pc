// Function for Total Price without promo code
function totalPriceUpdate(isAdd,extraCost){
    const totalCost = document.getElementById('total-price')
    const totalCostNumber = parseInt(totalCost.innerText)
    if(isAdd){
        return totalCost.innerText = totalCostNumber + extraCost
    }
    else{
        return totalCost.innerText = totalCostNumber - extraCost
    }
    
}


// Function for Memory Cost
function memoryCost(isCost){
    const extraMemoryCost = document.getElementById('extra-memory-cost')
    const extraMemoryCostText = parseInt(extraMemoryCost.innerText)
    
    if(isCost){
        const extraCost = extraMemoryCost.innerText = 180
        totalPriceUpdate(true,extraCost)
        PriceAfterPromo(true,extraCost)
        
    }else if(!isCost){
        const extraCost = extraMemoryCost.innerText = 0
        const totalUpdate = 180
        totalPriceUpdate(false, totalUpdate)
        PriceAfterPromo(false,totalUpdate)
        
    }
    
}
const memory8GB = document.getElementById('memory-8gb')
memory8GB.addEventListener('click',
function(){
    memoryCost(false)
})
const memory16GB = document.getElementById('memory-16gb')
memory16GB.addEventListener('click',
function(){
    memoryCost(true)
})

// Function For Extra Storage
function storageCost(isCost){
    const extraStorageCost = document.getElementById('extra-storage-cost')
    const extraStorageCostText = parseInt(extraStorageCost.innerText)
    if(isCost === 100){
        const extraCost = extraStorageCost.innerText = 100
        totalPriceUpdate(true, extraCost)
        PriceAfterPromo(true,extraCost)
    }
    else if(isCost === 180){
        const extraCost = extraStorageCost.innerText = 180
        totalPriceUpdate(true, extraCost)
        PriceAfterPromo(true, extraCost)

    }
    else{
        const extraCost = extraStorageCost.innerText = 0
        totalPriceUpdate(false, extraCost)
        PriceAfterPromo(false,extraCost)
        
    }
}

const storage25Gb = document.getElementById('storage-256GB')
const storage512Gb = document.getElementById('storage-512GB')
const storage1Tb = document.getElementById('storage-1TB')
storage25Gb.addEventListener('click',
function(){
    storageCost(0)
})
storage512Gb.addEventListener('click',
function(){
    storageCost(100)
})
storage1Tb.addEventListener('click',
function(){
    storageCost(180)
})


// Function For Delivery Cost
function deliveryCostUpdate(isCosting){
    const deliveryCost = document.getElementById('delivery-cost')
    const deliveryFreeText = parseInt(deliveryCost.innerText)
    if(isCosting){   
        const extraCost = deliveryCost.innerText = 20
        totalPriceUpdate(true, extraCost)
        PriceAfterPromo(true,extraCost)   
    }
    else if(!isCosting){
        const extraCost = deliveryCost.innerText = 0
        const totalUpdate = 20
        totalPriceUpdate(false, totalUpdate)
        PriceAfterPromo(false, totalUpdate)
    }
}

const deliveryFree = document.getElementById('delivery-free')
const deliveryCharged = document.getElementById('delivery-charged')

deliveryFree.addEventListener('click', 
function(){
    deliveryCostUpdate(false)
})

deliveryCharged.addEventListener('click', 
function(){
    deliveryCostUpdate(true)
})



// Promo code Apply part
const applyBtn = document.getElementById('apply-btn')
applyBtn.addEventListener('click',
function(){
    const inTotalPrice = document.getElementById('inTotal-price')
    const inTotalNumber = parseInt(inTotalPrice.innerText)
    
    const promoCode = document.getElementById('promo-code')
    const promoCodeValue = promoCode.value
    if(promoCodeValue === 'stevekaku'){
        inTotalPrice.innerText = inTotalNumber - inTotalNumber * 20/100
        promoCode.value = ''
    }
})

// Function for Total Price with promo code
function PriceAfterPromo(isAdd, extraCost){
    const inTotalPrice = document.getElementById('inTotal-price')
    const inTotalPriceNumber = parseInt(inTotalPrice.innerText) 
    if(isAdd){
        return inTotalPrice.innerText = inTotalPriceNumber + extraCost
    }
    else{
        return inTotalPrice.innerText = inTotalPriceNumber - extraCost
    }
}

