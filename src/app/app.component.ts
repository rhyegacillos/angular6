import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userActivated.subscribe(
      (id: number) => {
        switch (id) {
          case 1:
            this.user1Activated = true;
            this.user2Activated = false;
            break;
          case 2:
            this.user2Activated = true;
            this.user1Activated = false;
            break;
        }
      }
    );
  }
}
