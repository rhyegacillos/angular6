import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import {RouterModule, Routes} from '@angular/router';
import { ServerComponent } from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servers', component: ServersComponent, children: [
      {path: ':id/edit', component: EditServerComponent},
      {path: ':id', component: ServerComponent},
    ]},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
