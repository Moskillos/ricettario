import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredient[];

    constructor(name: string, descr: string, imagePath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = descr;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}