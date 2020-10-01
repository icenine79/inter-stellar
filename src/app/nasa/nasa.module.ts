import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { ContentComponent } from './components/content/content.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { NasaRoutingModule } from './nasa-routing.module';
import { SummaryPipe } from '../helpers/pipes/summary-pipe';
import { DetailComponent } from './components/detail/detail.component';



@NgModule({
  declarations: [
    BaseComponent, 
    ContentComponent, 
    LeftComponent, 
    RightComponent, DetailComponent,
 

  ],
  imports: [
    CommonModule,
    NasaRoutingModule,
    MaterialModule
  ]
})
export class NasaModule { }
