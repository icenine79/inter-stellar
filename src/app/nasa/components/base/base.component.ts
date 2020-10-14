import { cameras, displayedColumns } from './../../../global-features/globals';
import { NasaService } from './../../services/nasa.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DayPicture } from '../../models/DayPicture';
import { RoverCamera } from '../../../global-features/models/RoverCameras';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BaseComponent implements OnInit {
pictureObject: DayPicture[];
rover: RoverCamera[];
dataSource: RoverCamera[];
nodata:boolean;
readonly cameras = cameras;
readonly displayedColumns = displayedColumns;

constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getDayPicture()
    .subscribe((data:DayPicture)=>{
      this.pictureObject=Array.of(data)

    })

  }
getPicByCamera(){
}

receivedCamera(camera){
  this.nasaService.getPicByCamera(camera)
  .subscribe(pictures=>{
    this.rover = this.dataSource= pictures;
  })


}



}
