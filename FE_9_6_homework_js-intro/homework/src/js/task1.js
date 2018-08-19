let price=parseFloat(prompt('Enter price:', '4950'));
let discount=parseFloat(prompt('Enter discount:', '30'));

if(price!==isNaN && price>0){
    if (discount!==isNaN && discount>0 && discount<=100) {
        let priceWithDiscount=price-price*discount/100;
        console.log(
        `Price without discount: ${parseFloat(price.toFixed(2))}\n`+ 
        `Discount: ${parseFloat(discount.toFixed(2))}%\n`+
        `Price with discount:${parseFloat(priceWithDiscount.toFixed(2))}\n`+
        `Saved:${parseFloat((price-priceWithDiscount).toFixed(2))}`);
    } else {
        console.log('Invalid data');
    }
} else {
    console.log('Invalid data');
}