import { NasaService } from './../../../nasa/services/nasa.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../global-features/models/User';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  picObj: any;
  aux: any;
  uniquePicture:any;
  constructor(
    private userService: UserService,
    private nasaService: NasaService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = this.filteredUsers = users;
    });
    this.nasaService.getPictures().subscribe((data) => {
      this.picObj = data;
      console.log(data)
      this.uniquePicture = this.picObj.map(x=>x['picture'])
      let x = new Set(this.uniquePicture)
      this.uniquePicture = [...x]
      console.log(this.uniquePicture);//ensure that there are no repeated values
    });

  }

  searchUser(query: string) {
    this.filteredUsers = query
      ? this.users.filter((user) =>
          user.username.toLowerCase().includes(query.toLowerCase())
        )
      : this.users;
  }
  deletePicture(picture) {
    console.log(picture);
    /*   this.nasaService.deletePicture(picture)
    .subscribe(pic=>{
      console.log(pic)
      let index = this.picObj.indexOf(pic)
      this.picObj.splice(index,1);
    }) */
  }
}
