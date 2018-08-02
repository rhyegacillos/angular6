import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';
import {RecipesModule} from './recipes/recipes.module';

const appRoutes: Routes = [
  // {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'recipes', component: RecipesModule},
  // {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
