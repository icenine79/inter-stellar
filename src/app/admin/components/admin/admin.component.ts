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
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe((users:User[])=>{
      this.users=users;
    })
  }

}
