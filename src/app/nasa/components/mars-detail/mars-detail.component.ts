import { NasaService } from './../../services/nasa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars-detail',
  templateUrl: './mars-detail.component.html',
  styleUrls: ['./mars-detail.component.scss']
})
export class MarsDetailComponent implements OnInit {
rover:any
  constructor(private nasaService: NasaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  this.route.paramMap
  .subscribe(params=>{
    this.rover=params.get('rover')
    this.nasaService.getPicByCamera(this.rover)
    .subscribe(data=>console.log(data))
  })

}
}
