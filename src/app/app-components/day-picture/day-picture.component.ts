import { AuthService } from './../../global-features/services/auth.service';
import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef, ɵComponentFactory } from '@angular/core';
import { DayPicture } from '../../nasa/models/DayPicture';
import { NasaService } from '../../nasa/services/nasa.service';
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
unique:any;
username:string;
  constructor(private nasaService: NasaService, private auth: AuthService) {
   this.username = this.auth.currenUserSubjectValue.username
  }

  ngOnInit(): void {
    this.nasaService.getDayPicture()
    .subscribe((data:DayPicture)=>{
      this.pictureObject=Array.of(data)

    })
    this.nasaService.getPictures()
    .subscribe(pics=>{
      this.picsToDisplay=pics;
      //this.unique = this.picsToDisplay.filter((v, i, a) => a.indexOf(v) === i);
      console.log(this.picsToDisplay)
    })
  }


  like(pic){

    let likeObject={
      picture:pic,
      username:this.username,
      likes: this.likes++
    }

    this.nasaService.likeDayPic(likeObject)
    .subscribe(()=>{})

  }

}
