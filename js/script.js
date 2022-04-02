//get innertext and update total price;
function updatePrice(itemID, price) {
    const memoryCost = document.getElementById(itemID);
    memoryCost.innerText = price;
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

//handle the right btn and set price;
function onclick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price);
    })
}
onclick('eightGB', 'memory-cost', 0);
onclick('sixteenGB', 'memory-cost', 200);
onclick('ssd1', 'storage-cost', 0);
onclick('ssd2', 'storage-cost', 200);
onclick('ssd3', 'storage-cost', 300);
onclick('free-delivery', 'delivery-cost', 0);
onclick('paid-delivery', 'delivery-cost', 20);

//promo code section
const fakeCode = 'pHero'
document.getElementById('apply-btn').addEventListener('click', function () {
    const userCode = document.getElementById('promo-input').value;

    const rightPromoCode = document.getElementById('applied-text');
    const wrongPromoCode = document.getElementById('not-applied-text')

    if (userCode == fakeCode) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);
        //20% discount
        const discountPrice = totalPrice * .2;
        totalPrice = totalPrice - discountPrice;
        //update price
        total.innerText = totalPrice;

        //update message
        rightPromoCode.style.display = 'block';
        wrongPromoCode.style.display = 'none'


    }
    else {
        wrongPromoCode.style.display = 'block';
        rightPromoCode.style.display = 'none';
    }

})

