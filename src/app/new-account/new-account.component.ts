import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoggingService} from '../logging.service';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountService: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChanged(accountStatus);
  }

  constructor() { }

  ngOnInit() {
  }

}
