import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storageRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes().subscribe();
    this.router.navigate(['/'], {relativeTo: this.route});
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['../signin'], {relativeTo: this.route});
  }
}
