import { Component, OnInit } from '@angular/core';
import { DayPicture } from '../../nasa/models/DayPicture';
import { NasaService } from '../../nasa/services/nasa.service';

@Component({
  selector: 'app-day-picture',
  templateUrl: './day-picture.component.html',
  styleUrls: ['./day-picture.component.scss']
})
export class DayPictureComponent implements OnInit {
  pictureObject: DayPicture[];
  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getDayPicture()
    .subscribe((data:DayPicture)=>{
      console.log(this.pictureObject)
      this.pictureObject=Array.of(data)

    })
  }

}
