import { Movie } from './../../models/Movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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
  constructor (private route: ActivatedRoute) {}
  ngOnInit() {
     this.route.data.subscribe((data:any) =>{
        this.movie=Array.of(data)
        this.series=this.movie[0]['movie'];
        this.seasons=+this.series['totalSeasons']
        console.log(this.seasons)
      })
      this.populateDropDown();
    }
populateDropDown(){
  this.seasons!==true? this.dropdown=false:this.dropdown=true
  for (let i = 1; i < this.seasons + 1; i++) {
    this.episodes.push(i);
    console.log(this.episodes)
  }
}

}
