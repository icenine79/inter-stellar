import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { ContentComponent } from './components/content/content.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { NasaRoutingModule } from './nasa-routing.module';



@NgModule({
  declarations: [BaseComponent, ContentComponent, LeftComponent, RightComponent],
  imports: [
    CommonModule,
    NasaRoutingModule
  ]
})
export class NasaModule { }
