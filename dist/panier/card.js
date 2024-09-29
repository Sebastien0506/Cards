"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(storage) {
        this.storage = storage;
    }
    addProduct(product) {
        this.storage.addItem(product);
    }
    getTotal() {
        let total = 0;
        for (let i = 0; i < this.storage.storage.length; i++) {
            total += this.storage.getItem(i).price;
        }
        return total;
    }
}
exports.Card = Card;
