import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simple test',
      'assets/images/recipe.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Another Test Recipe',
      'This is another simple test',
      'assets/images/recipe.jpg',
      [new Ingredient('buns', 5), new Ingredient('chicken', 1)] )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
