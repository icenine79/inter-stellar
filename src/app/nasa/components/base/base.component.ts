import { map } from 'rxjs/operators';
import { NasaService } from './../../services/nasa.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DayPicture } from '../../models/DayPicture';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BaseComponent implements OnInit {
pictureObject: DayPicture[];
cameraData:any[];
  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getDayPictre()
    .subscribe((data:DayPicture)=>{
      this.pictureObject=Array.of(data)

    })

  }
getPicByCamera(){
}

receivedCamera(camera){
  this.nasaService.getPicByCamera(camera)
  .subscribe(data=>{
this.cameraData=data.map(x=>x['img_src']);
console.log(this.cameraData)

  })


}



}
