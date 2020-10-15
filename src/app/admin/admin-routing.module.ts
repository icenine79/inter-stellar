import { AdminDetailComponent } from './components/admin-detail/admin-detail.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [

  {path:'', component:AdminComponent},
  {path:'admin-detail/:id', component:AdminDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
