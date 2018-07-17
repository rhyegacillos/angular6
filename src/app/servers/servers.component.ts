import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from './server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServerService]
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private serverService: ServerService) { }

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route });
  }

}
