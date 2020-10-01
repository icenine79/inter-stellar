import { DetailComponent } from './components/detail/detail.component';
import { BaseComponent } from './components/base/base.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'detail/:title', component: DetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaRoutingModule { }
