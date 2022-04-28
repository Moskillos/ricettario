export class Recipe{
    name: string;
    description: string;
    imagePath: string;

    constructor(name: string, descr: string, imagePath: string){
        this.name = name;
        this.description = descr;
        this.imagePath = imagePath
    }
}