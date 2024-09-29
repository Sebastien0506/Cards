"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(storage) {
        this.storage = storage;
    }
    Card.prototype.addProduct = function (product) {
        this.storage.addItem(product);
    };
    Card.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.storage.storage.length; i++) {
            total += this.storage.getItem(i).price;
        }
        return total;
    };
    return Card;
}());
exports.Card = Card;
