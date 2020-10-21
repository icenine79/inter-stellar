import { MovieService } from './../movie.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<Movie>{

  constructor(private movieService: MovieService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Movie> {
    return this.movieService.getMovies(route.paramMap.get('Title'));
  }
}
