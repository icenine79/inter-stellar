import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>
  currentUser: Observable<User>
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currenUserSubjectValue() {
    return this.currentUserSubject.value;
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

}
