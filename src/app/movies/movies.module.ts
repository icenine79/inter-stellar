import { BaseMovieComponent } from './components/base-movie/base-movie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';



@NgModule({
  declarations: [BaseMovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
