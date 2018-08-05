import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storageRecipes() {
    // const token = this.authService.getToken();
    // return this.http.put('https://recipe-db-8ca5b.firebaseio.com/recipe.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    // //  headers: new HttpHeaders().set('Authorization', 'bearer abcdefg')
    //   params: new HttpParams().set('auth', token)
    // });

    const req = new HttpRequest('PUT', 'https://recipe-db-8ca5b.firebaseio.com/recipe.json',
      this.recipeService.getRecipes(), {reportProgress: true});
    return this.http.request(req);
  }

  getRecipes() {
    // const token = this.authService.getToken();
    // return this.http.get<Recipe[]>('https://recipe-db-8ca5b.firebaseio.com/recipe.json?auth=' + token)
    return this.http.get<Recipe[]>('https://recipe-db-8ca5b.firebaseio.com/recipe.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        map(
          (recipes) => {
            console.log(recipes)
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return this.recipeService.setRecipes(recipes);
          }
        )
      );
  }
}
