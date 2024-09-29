"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./entities/Product");
var StorableRepository_1 = require("./services/StorableRepository");
var card_1 = require("./panier/card");
// On crées des produits
var product1 = new Product_1.Product('Vélo', 299);
var product2 = new Product_1.Product('Ballon', 15.00);
// On initialise u système de stockage
var storage = new StorableRepository_1.MemoryStorage();
// Création du panier et ajout des produits
var cart = new card_1.Card(storage);
cart.addProduct(product1);
cart.addProduct(product2);
// On calcule le total du panier
console.log("Total du panier : ", cart.getTotal());
