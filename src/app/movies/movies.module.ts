import { MaterialModule } from './../material/material.module';
import { BaseMovieComponent } from './components/base-movie/base-movie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';



@NgModule({
  declarations: [BaseMovieComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})
export class MoviesModule { }
