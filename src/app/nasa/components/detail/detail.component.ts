import { DayPicture } from './../../models/DayPicture';
import { NasaService } from './../../services/nasa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  title: any;
  detailedPicture: DayPicture[];
  constructor(private route: ActivatedRoute, private router: Router, private nasaService: NasaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
      this.nasaService.getDetailPicture(this.title)
        .subscribe(data => {
          this.detailedPicture = data;
        })


    });
  }
}
