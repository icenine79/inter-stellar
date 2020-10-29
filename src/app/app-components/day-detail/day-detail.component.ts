import { NasaService } from './../../nasa/services/nasa.service';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { User } from '../../global-features/models/User';
@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
dayPicture: any;
user:User;
picObj:any;
uniquePicture:any[]=[];
image:string;
  constructor (
    private route: ActivatedRoute,
    private location: Location,
    private auth: AuthService,
    private nasaService: NasaService) {
    this.auth.currentUser
    .subscribe(user=>{
      this.user=user;
      console.log(user)
    })

  }
  ngOnInit() {
     this.route.data.subscribe(data =>{
      this.dayPicture= data
      console.log(this.dayPicture)
     });



  }

  isAdmin():boolean{
    return this.auth.isAdmin();
  }

goBack(){
  this.location.back();
}
save(image){
  this.image=image
  let likeObj={
    user:this.user.username,
    picture: image
  }

  this.nasaService.likeDayPic(likeObj)
  .subscribe(data=>{
    console.log(data)


  })
}
}
