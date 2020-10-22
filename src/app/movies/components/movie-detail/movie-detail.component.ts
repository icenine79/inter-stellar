import { Movie } from './../../models/Movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
movie:Movie[]
  constructor (private route: ActivatedRoute) {}
  ngOnInit() {
     this.route.data.subscribe((data:Movie[]) =>{
        this.movie=data
       console.log(this.movie)
      })
  }
}
