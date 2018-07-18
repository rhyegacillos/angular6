import {NgModule} from '@angular/core';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UsersComponent} from './users/users.component';
import {ServersComponent} from './servers/servers.component';
import {UserComponent} from './users/user/user.component';
import {ServerComponent} from './servers/server/server.component';
import {AuthGuardService} from './auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servers', canActivate: [AuthGuardService], component: ServersComponent, children: [
      {path: ':id/edit', component: EditServerComponent},
      {path: ':id', component: ServerComponent},
    ]},
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
