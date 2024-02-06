"use strict"

class Producto {
    constructor(description, price, stock) {
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    showInfo() {
        alert(`Descripción: ${this.description}  -   Price: ${this.price}  -  Stock: ${this.stock}`)
    }
    minusStock() {
       this.stock = this.stock - 5;
        alert(`Stock: ${this.stock}`)
    }
    incrementStock() {
        this.stock = this.stock + 5;
        alert(`Stock: ${this.stock}`)
    }
    updarePrice(newPrice) {
        this.price = newPrice;
    }
}
let producto = new Producto("Iphone", 500, 20);
producto.showInfo();
producto.minusStock();
producto.incrementStock();
producto.updarePrice(700);
producto.showInfo();