import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as fromAuth from './store/auth.reducers';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('auth').map(
      (authState: fromAuth.State) => {
        return authState.authenticated;
      }
    );
  }
}
