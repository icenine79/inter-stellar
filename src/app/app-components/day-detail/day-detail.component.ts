import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {

  constructor (private route: ActivatedRoute) {}
  ngOnInit() {
     this.route.data.subscribe(data => console.log('Data :', data));
  }

}
