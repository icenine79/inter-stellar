import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { NasaRoutingModule } from './nasa-routing.module';
import { SummaryPipe } from '../helpers/pipes/summary-pipe';
import { MarsDetailComponent } from './components/mars-detail/mars-detail.component';



@NgModule({
  declarations: [
    BaseComponent,
    LeftComponent,
    RightComponent,
    MarsDetailComponent,


  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    MaterialModule
  ]
})
export class NasaModule { }
