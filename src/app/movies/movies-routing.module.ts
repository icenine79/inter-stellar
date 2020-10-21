import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { BaseMovieComponent } from './components/base-movie/base-movie.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path: '', component: BaseMovieComponent},
  {path: 'movie-detail/:Title', component: MovieDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
