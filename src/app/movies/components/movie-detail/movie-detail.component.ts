import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  constructor (private route: ActivatedRoute) {}
  ngOnInit() {
     this.route.data.subscribe(data => console.log('Data :', data));
  }
}
