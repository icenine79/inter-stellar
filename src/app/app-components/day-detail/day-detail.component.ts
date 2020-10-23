import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
dayPicture: any;
  constructor (private route: ActivatedRoute) {}
  ngOnInit() {
     this.route.data.subscribe(data =>{
      this.dayPicture= data
      console.log(this.dayPicture)
     });
  }

}
