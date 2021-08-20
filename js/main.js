
// Function for Memory Costing
function memoryCost(isCost){
    const extraMemoryCost = document.getElementById('extra-memory-cost')
    const extraMemoryCostText = parseInt(extraMemoryCost.innerText)
    
    if(isCost){
        const extraCost = extraMemoryCost.innerText = 180
        const totalCost = document.getElementById('total-price')
        const totalCostNumber = parseInt(totalCost.innerText)
        totalCost.innerText = totalCostNumber + extraCost 
       
       
    }else if(!isCost){
        const extraCost = extraMemoryCost.innerText = 0
        const totalCost = document.getElementById('total-price')
        const totalCostNumber = parseInt(totalCost.innerText)
        totalCost.innerText = totalCostNumber - 180 
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
        const totalCost = document.getElementById('total-price')
        const totalCostNumber = parseInt(totalCost.innerText)
        totalCost.innerText = totalCostNumber + extraCost 
    }
    else if(isCost === 180){
        const extraCost = extraStorageCost.innerText = 180
        const totalCost = document.getElementById('total-price')
        const totalCostNumber = parseInt(totalCost.innerText)
        totalCost.innerText = totalCostNumber + extraCost 
    }
    else{
        const extraCost = extraStorageCost.innerText = 0
        const totalCost = document.getElementById('total-price')
        const totalCostNumber = parseInt(totalCost.innerText)
        totalCost.innerText = totalCostNumber - 280
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
        const totalCost = document.getElementById('total-price')
        const totalCostNumber = parseInt(totalCost.innerText)
        totalCost.innerText = totalCostNumber + extraCost
    }
    else if(!isCosting){
        const extraCost = deliveryCost.innerText = 0
        const totalCost = document.getElementById('total-price')
        const totalCostNumber = parseInt(totalCost.innerText)
        totalCost.innerText = totalCostNumber - 20
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
        inTotalPrice.innerText = inTotalNumber * 20/100
        promoCode.value = ''
    }
})







const inTotalPrice = document.getElementById('inTotal-price')
const totalPrice = document.getElementById('total-price')

// const inTotalPriceNumber = parseInt(inTotalPrice.innerText) 
const totalPriceNumber = parseInt(totalPrice.innerText) 
inTotalPrice.innerText = totalPriceNumber
console.log(totalPriceNumber)
console.log(inTotalPrice.innerText = totalPriceNumber)
