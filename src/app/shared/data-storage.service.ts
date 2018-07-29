import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storageRecipes() {
    return this.http.put('https://recipe-db-8ca5b.firebaseio.com/recipe.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://recipe-db-8ca5b.firebaseio.com/recipe.json').pipe(
      map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return this.recipeService.setRecipes(recipes);
        }
      )
    );
  }
}
