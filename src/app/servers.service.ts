import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {map} from 'rxjs/operators';

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
    return this.http.get('https://angular-project-3ff3f.firebaseio.com/data.json')
      .pipe(map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      ));
  }
}
