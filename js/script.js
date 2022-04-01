// document.getElementById('eightGB').addEventListener('click', function () {
//     alert('is add')
// });
document.getElementById('sixteenGB').addEventListener('click', function () {
    // const memoryCost = document.getElementById('memory-cost');
    // memoryCost.innerText = 200;

    // const bestPrice = document.getElementById('best-price').innerText;
    // const memoryPrice = document.getElementById('memory-cost').innerText;
    // const storagePrice = document.getElementById('storage-cost').innerText;
    // const deliveryPrice = document.getElementById('delivery-cost').innerText;

    // const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    // const total = document.getElementById('total-price');
    // total.innerText = totalPrice;
    updatePrice('memory-cost', 200)
});
document.getElementById('ssd3').addEventListener('click', function () {
    updatePrice('storage-cost', 300);
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
