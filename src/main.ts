import { Product } from './entities/Product';
import { MemoryStorage } from './services/StorableRepository';
import { Card } from './panier/card';

// Créer des produits
const product1 = new Product('Vélo', 299);
const product2 = new Product('Ballon', 15.00);

// Créer un système de stockage en mémoire
const storage = new MemoryStorage();

// Créer un panier et y ajouter des produits
const cart = new Card(storage);
cart.addProduct(product1);
cart.addProduct(product2);

// Calculer le total
console.log("Total du panier : ", cart.getTotal());