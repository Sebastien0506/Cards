"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorage = void 0;
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage() {
        this.storage = [];
    }
    MemoryStorage.prototype.addItem = function (item) {
        this.storage.push(item);
    };
    MemoryStorage.prototype.getItem = function (id) {
        return this.storage[id];
    };
    MemoryStorage.prototype.removeItem = function (id) {
        this.storage.splice(id);
    };
    return MemoryStorage;
}());
exports.MemoryStorage = MemoryStorage;
