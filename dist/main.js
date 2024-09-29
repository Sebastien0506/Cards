"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Entities/Product");
const StorableRepository_1 = require("./services/StorableRepository");
const card_1 = require("./panier/card");
// Créer des produits
const product1 = new Product_1.Product('Vélo', 299);
const product2 = new Product_1.Product('Ballon', 15.00);
// Créer un système de stockage en mémoire
const storage = new StorableRepository_1.MemoryStorage();
// Créer un panier et y ajouter des produits
const cart = new card_1.Card(storage);
cart.addProduct(product1);
cart.addProduct(product2);
// Calculer le total
console.log("Total du panier : ", cart.getTotal());
