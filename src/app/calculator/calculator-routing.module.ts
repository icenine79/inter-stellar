


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseCalculatorComponent } from './components/base-calculator/base-calculator.component';


const routes: Routes = [

 {path:'', component: BaseCalculatorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
