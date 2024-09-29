"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryStorage = void 0;
class MemoryStorage {
    constructor() {
        this.storage = [];
    }
    addItem(item) {
        this.storage.push(item);
    }
    getItem(id) {
        return this.storage[id];
    }
    removeItem(id) {
        this.storage.splice(id);
    }
}
exports.MemoryStorage = MemoryStorage;
