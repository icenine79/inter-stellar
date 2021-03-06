import { MarsDetailComponent } from './components/mars-detail/mars-detail.component';
import { BaseComponent } from './components/base/base.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'mars-detail/:id', component: MarsDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NasaRoutingModule { }
