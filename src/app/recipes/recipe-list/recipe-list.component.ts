import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Titolo', 'Descrizione', 'https://smartfood.ieo.it/media/1642/la-lista-degli-ingredienti.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
