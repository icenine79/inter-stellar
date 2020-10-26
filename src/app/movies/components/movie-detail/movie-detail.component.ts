import { User } from './../../../shared/models/User';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/Movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
movie:any
series:any;
seasons:any
dropdown:boolean=false;
episodes:any[]=[]
episode:string=''
title:string;
user:User;
fetchedEpisode:any;
  constructor (private route: ActivatedRoute, private movieService: MovieService, private auth: AuthService) {
    this.auth.currentUser
    .subscribe(user=>{
      this.user=user;
    })
  }
  ngOnInit() {
     this.route.data.subscribe((data:any) =>{
        this.movie=Array.of(data)
        this.series=this.movie[0]['movie'];
        this.title=this.series['Title']
        this.seasons=+this.series['totalSeasons']
      })
      this.populateDropDown();

    }
    searchByEpisode(){
      this.movieService.getEpisode(this.title, this.episode)
      .subscribe(data=>{
       this.fetchedEpisode=data['Episodes'];
       console.log(this.fetchedEpisode)
      })
    }



populateDropDown(){
  !this.seasons? this.dropdown = false:
                 this.dropdown = true;
   for (let i = 1; i < this.seasons + 1; i++) {
    this.episodes.push(i);
    console.log(this.episodes)
  }
}



}
