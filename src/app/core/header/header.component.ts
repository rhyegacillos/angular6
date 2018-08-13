import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) {}

  onSaveData() {
    this.dataStorageService.storageRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes().subscribe();
    this.router.navigate(['/recipes'], {relativeTo: this.route});
  }

  onLogout() {
   // this.router.navigate(['../signin'], {relativeTo: this.route});
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }
}
