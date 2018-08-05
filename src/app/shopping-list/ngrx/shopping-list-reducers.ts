import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListActions} from './shopping-list-action';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient( 'Tomatoes', 5)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions) {

  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
