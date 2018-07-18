import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serverService: ServerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1';
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serverService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
