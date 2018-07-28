import { Component } from '@angular/core';
import {ServersService} from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generatedId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generatedId()
    }
  ];
  constructor(private serversService: ServersService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generatedId()
    });
  }

  private generatedId() {
    return Math.round(Math.random() * 10000);
  }
  onSave() {
    this.serversService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
