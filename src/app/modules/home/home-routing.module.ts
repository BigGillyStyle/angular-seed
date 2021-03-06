import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract, AuthenticationGuard } from '@app/core';
import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { RoleGuard } from '@app/guards/role-guard.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthenticationGuard],
      data: {
        roles: ['user'],
        title: extract('Home')
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule {}
