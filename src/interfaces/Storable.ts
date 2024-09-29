// On créer l'interface de stockage
export interface Storable {
    addItem(item : any) : void;
    getItem(id : number) : any;
    removeItem(id : number) : void;
}










