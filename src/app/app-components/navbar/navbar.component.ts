import { Component, OnInit } from '@angular/core';
import { User } from '../../global-features/models/User';
import {Router} from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;
  user: User;
  animationState = 'out';


  constructor(private router: Router, private auth: AuthService) {
    this.auth.currentUser.subscribe((user: User) => {
      this.user = user;
      console.log(user)
    })
  }

  ngOnInit(): void {

  }
isLoggedIn(){
  this.auth.isLoggedIn();
}
isAdmin():boolean{
  return this.auth.isAdmin();
}


  logOut() {
this.auth.logOut()
  }
  editCredentials(id) {
    this.isMenuCollapsed = true;
    this.router.navigate(["/edit", id]);
  }
}
