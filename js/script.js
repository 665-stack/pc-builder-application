//default memory section
document.getElementById('eightGB').addEventListener('click', function () {
    updatePrice('memory-cost', 0)
});
//sixteenGB memory section
document.getElementById('sixteenGB').addEventListener('click', function () {
    updatePrice('memory-cost', 200)
});
//default SSD section
document.getElementById('ssd1').addEventListener('click', function () {
    updatePrice('storage-cost', 0)
})
//512GB SSD section
document.getElementById('ssd2').addEventListener('click', function () {
    updatePrice('storage-cost', 200)
})
//1TB SSD section
document.getElementById('ssd3').addEventListener('click', function () {
    updatePrice('storage-cost', 300);
})
//Free dalivery section
document.getElementById('free-delivery').addEventListener('click', function () {
    updatePrice('delivery-cost', 0);
})
//Paid delivary section
document.getElementById('paid-delivery').addEventListener('click', function () {
    updatePrice('delivery-cost', 20);
})

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
