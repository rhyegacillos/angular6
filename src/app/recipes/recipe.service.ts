import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
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

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  // addIngredientToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }

}
