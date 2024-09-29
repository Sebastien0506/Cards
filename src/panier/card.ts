// On importe la class Product et l'interface Stockage
import { Product } from "../entities/Product";
import { Storable } from "../interfaces/Storable";

// On créer la class Card
export class Card{
    private storage : Storable;

    // On définit le constructor
    constructor(storage : Storable){
        this.storage = storage;
    }
    // On ajoute le produit au stockage 
    addProduct(product : Product) : void {
        this.storage.addItem(product)
    }

    getTotal() : number {
        let total = 0;
        //On parcoure le tableau et on fait le total
        for (let i = 0; i < (this.storage as any ).storage.length; i++) {
            total += this.storage.getItem(i).price;

        }
        return total;
    }
}