// Online Shopping System

class Product {
    constructor(name, price, stock_quantity) {
        this.name = name;
        this.price = price;
        this.stockquantity = stock_quantity;
    }
}
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.shopping_cart = new shoppingCart();
    }
}
class shoppingCart {
    constructor() {
        this.products = [];
    }
    addProduct(product, quantity) {
        if (product.stockquantity >= quantity) {
            const item = {product, quantity}
            this.products.push(item);
            product.stockquantity -= quantity;
        }
    }
    totalPrice() {
        return this.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
    checkout() {
        const total_price = this.totalPrice();
        console.log(`Total Price: ${total_price}`);
        console.log("Thank you for shopping with us");
        this.products = [];
    }
}
const sushil = new Customer("sushil", "sushilki@gmail.com");
const phone  = new Product("iphone",25000, 25);
const smartwatch = new Product("iwatch", 50000, 20);
sushil.shopping_cart.addProduct(phone, 10);
sushil.shopping_cart.addProduct(smartwatch, 2);
sushil.shopping_cart.checkout();
