import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { OpenService } from 'src/app/open.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  id: number = 0;
  openmenu:boolean = false;
  

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private openService: OpenService,
              private listener: OpenService,
              
              ) { }
 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id)
    });
    this.listener.openMenu.subscribe(actived => {
      this.openmenu = actived
    }
      )
  }

  onAddShoppingList(){    
    this.recipeService.addIngredients(this.recipe.ingredients)
  
  }

  openMenu(){
    this.openService.openMenu.next(true)
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

 
}
