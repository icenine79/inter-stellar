import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-base-movie',
  templateUrl: './base-movie.component.html',
  styleUrls: ['./base-movie.component.scss']
})
export class BaseMovieComponent implements OnInit {

  movies: Movie[];
  storedMovies: any[] = [];
  error: boolean;
  movieRate: any;

  constructor(
    private movieService: MovieService) {}

  ngOnInit() {

this.getMovie('Superman');//Default Movie

   }





  //insert movie into backend array

  getMovie(movie:string) {

 this.movieService
      .getMovies(movie)
      .subscribe(data => {
        if(data.Error){
          this.error=true
          console.log(this.error)
        }else{
        this.movies = Array.of(data);
        console.log(this.movies)
        this.error = false;
        console.log(this.error)
         this.movieRate = this.movies.map(rating => rating['imdbRating'].toString());
        }
      }), error => console.log(error)

  }





}
