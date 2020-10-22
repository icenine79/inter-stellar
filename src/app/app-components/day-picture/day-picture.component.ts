import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef, ɵComponentFactory } from '@angular/core';
import { DayPicture } from '../../nasa/models/DayPicture';
import { NasaService } from '../../nasa/services/nasa.service';
import { AuthService } from '../../shared/services/auth.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-day-picture',
  templateUrl: './day-picture.component.html',
  styleUrls: ['./day-picture.component.scss']
})
export class DayPictureComponent implements OnInit {
  pictureObject: DayPicture[];
  likes:number=0;
  picsToDisplay:any;
  error:boolean=false;
  constructor(private nasaService: NasaService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.nasaService.getDayPicture()
    .subscribe((data:DayPicture)=>{
      this.pictureObject=Array.of(data)

    },error=>{
      this.error=true;
    })
    this.nasaService.getPictures()
    .subscribe(pics=>{
      this.picsToDisplay=pics;
      //this.unique = this.picsToDisplay.filter((v, i, a) => a.indexOf(v) === i);
      console.log(this.picsToDisplay)
    })
  }


  like(pic){



  }

}
