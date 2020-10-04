import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>
  currentUser: Observable<User>
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currenUserSubjectValue() {
    return this.currentUserSubject.value;
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login'])
  }
  /* public get isAdmin(): boolean {
    const user = JSON.stringify(localStorage.getItem('currentUser'));
    const decoded = this.helper.decodeToken(user);
    if (decoded['isAdmin'] == true) {
      return true
    }
    return false

  } */

  isLoggedIn(): boolean {
    const user = JSON.stringify(localStorage.getItem('currentUser'));
    return (user != null || user != undefined) ? true : false
  }
logIn(credentials:any) {
  return this.http.post('/users/authenticate', credentials)
  .pipe(map(user=>{
    if(user)
    localStorage.setItem('currentUser', JSON.stringify(user))
    return user;
  }))
}
}
