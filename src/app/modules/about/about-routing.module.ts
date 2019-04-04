import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract, AuthenticationGuard } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about.component';
import { RoleGuard } from '@app/guards/role-guard.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      component: AboutComponent,
      canActivate: [AuthenticationGuard],
      data: {
        roles: ['user'],
        title: extract('About')
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule {}