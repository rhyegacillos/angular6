import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route });
  }

}
