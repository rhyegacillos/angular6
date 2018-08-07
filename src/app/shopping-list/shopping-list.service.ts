import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient( 'Tomatoes', 5)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }
}
