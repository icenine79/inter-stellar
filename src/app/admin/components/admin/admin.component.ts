import { NasaService } from './../../../nasa/services/nasa.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../global-features/models/User';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
users:User[]=[]
filteredUsers:User[]=[]
picObj: any;
uniquePicture:any[]=[]
  constructor(private userService: UserService, private nasaService: NasaService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe((users:User[])=>{
      this.users= this.filteredUsers = users;
    })
    this.nasaService.getPictures()
    .subscribe(data=>{
     this.picObj =data
     this.uniquePicture.push(this.picObj[0]['picture'])
     console.log(this.uniquePicture)
    })

  // this.uniquePicture =[...new Set(this.picObj)]
  // console.log(this.uniquePicture)
  }

  searchUser(query: string){
    this.filteredUsers = (query)?
    this.users.filter(user=>user.username.toLowerCase().includes(query.toLowerCase())):
    this.users;
  }

}
