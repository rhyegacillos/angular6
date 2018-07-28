import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    // return this.http.post('https://angular-project-3ff3f.firebaseio.com/data.json',
    //   servers, {headers: headers});
    return this.http.put('https://angular-project-3ff3f.firebaseio.com/data.json',
      servers, {headers: headers});
  }

  getServers() {
    return this.http.get('https://angular-project-3ff3f.firebaseio.com/data.json');
  }
}
