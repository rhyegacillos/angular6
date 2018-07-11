import {Recipe} from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simple test',
      'assets/images/recipe.jpg'),
    new Recipe('Another Test Recipe',
      'This is another simple test',
      'assets/images/recipe.jpg' )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
