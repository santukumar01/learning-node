// how to use debug in Node js

function findPrice(products) {
    let total = 0;
    products.forEach((product) => {
        total += product.price * product.quantity;
    });
    return total;
}

const productList = [{ "name": "hat", "price": 10, "quantity": 2 },
{ "name": "book", "price": 100, "quantity": 1 },
{ "name": "table", "price": 1000, "quantity": 2 }]

function printTotal(value) {
    console.log(value);
}

const totalPrice = findPrice(productList);
// console.log(totalPrice);

printTotal(totalPrice);

//how to use debegger -> by using inspect command
//for inspecting the file 12_debug.js- node inspect .\12_debug.js
//seting a debbuger point -> setBreakpoint('12_debug.js', 4)

//watching the product
// watch('product')   // name of variable
//  cont

