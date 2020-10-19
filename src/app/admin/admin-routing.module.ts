import { UserResolverService } from './../shared/services/resolvers/user-resolver.service';
import { AdminDetailComponent } from './components/admin-detail/admin-detail.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [

  {path:'', component:AdminComponent},
  {
    path:'user/:id',
    component:AdminDetailComponent,
    resolve: {
      adminUser: UserResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
