// Creating a Model (it doesn't need to be registered anywhere):
export class Category {
    constructor(public categoryID: number, public categoryName: string) { }


    print():string{
        return `${this.categoryID} : ${this.categoryName} `;
    }
}