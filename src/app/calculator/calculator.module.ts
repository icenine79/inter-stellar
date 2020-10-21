import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCalculatorComponent } from './components/base-calculator/base-calculator.component';
import { CalculatorRoutingModule } from './calculator-routing.module';



@NgModule({
  declarations: [BaseCalculatorComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule
  ]
})
export class CalculatorModule { }
