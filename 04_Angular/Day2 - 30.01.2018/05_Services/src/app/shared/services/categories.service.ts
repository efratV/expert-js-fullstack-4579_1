import {Injectable} from '@angular/core';

// Custom Service.
// Note: if this service needs to use some other injectable service(s),
// we need to declare @Injectable() above the Service.


@Injectable()
export class CategoriesService {


    private arr=["Beverages", "Condiments", "Confections", "Dairy Products", "Grains/Cereals", "Meat/Poultry", "Produce", "Seafood"];
    private numOfElements=this.arr.length;  // primitive - by val
    
    // Service function - returning all categories "from the database":
    getCategories(): string[] {
        return this.arr;  //is returned by ref
    }


    getCategoriesCounter(): number {
        return this.numOfElements;  //is returned by val
    }

    addCategory(s:string): number {
        this.arr.push(s);
        this.numOfElements++;

        return this.numOfElements;
    }
}