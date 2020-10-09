import { AuthService } from './../../../global-features/services/auth.service';
import { DayPicture } from './../../models/DayPicture';
import { NasaService } from './../../services/nasa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { User } from '../../../global-features/models/User';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  title: any;
  user:User;
  detailedPicture: DayPicture[];
  likes:number=0;
  receivedLikes:any
  constructor(private route: ActivatedRoute, private router: Router, private nasaService: NasaService, private auth:AuthService) {
    this.auth.currentUser.subscribe((user:User)=>{
      this.user=user;
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
      this.nasaService.getDetailPicture(this.title)
        .subscribe(data => {
          this.detailedPicture = data;
        })
    });
  }
  like(){
    this.likes++

    this.nasaService.likePicture(this.likes, this.user)
    .subscribe(data=>{
      this.receivedLikes=data
      this.receivedLikes=JSON.parse(localStorage.getItem('likes'));
      console.log(this.receivedLikes)
    });
  }

}
