import { Storable} from '../interfaces/Storable';

// On créer la class MemoryStorage et on impléments Storable
export class MemoryStorage implements Storable {
    // On initialise la variable storage sur un tableau vide 
    private storage : any = [];

    // On push les items
    addItem(item : any) : void {
        this.storage.push(item);
    }

    getItem(id: number) {
        return this.storage[id];
    }

    removeItem(id: number): void {
        this.storage.splice(id);
    }
}