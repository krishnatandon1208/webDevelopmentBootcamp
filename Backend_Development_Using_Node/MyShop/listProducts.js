/* Exercise - Be resourceful. Don't cheat.
    1. Create a directory named "MyShop"
    2. Add a file named "listProducts.js"
    3. Install the "faker" package.
    4. Read the faker docs and check how it works.
    5. Use faker to print ut 10 random products names and prices.
    6. Run file with node and make sure it works.s
*/

var fakeProducts = require("faker");

var getProductName = fakeProducts.name.findName();
var getProductPrice = fakeProducts.commerce.price();

console.log(" ");
console.log("==========================================");
console.log("||     Welcome to our Online Store      ||");
console.log("==========================================");
console.log(" ");

for(var i=0; i<10; i++){    
    console.log(fakeProducts.commerce.productName() + " - $" +fakeProducts.commerce.price());
}

console.log(" ");