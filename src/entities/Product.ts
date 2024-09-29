// Création de la class Product
export class Product  {
    // On définit les variable
    private name : string;
    private price : number;
     
    // On créer le constructor
     constructor(name : string, price : number) {
         this.name = name;
         this.price = price;
     }
 
     getName() {
         return this.name;
     }
     getPrice(){
         return this.price;
     }
     
 }

