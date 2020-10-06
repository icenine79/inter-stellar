import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
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

 /*  isAdmin(): boolean {
    const user = JSON.stringify(localStorage.getItem('currentUser'));
    const decoded = this.helper.decodeToken(user);
    if (decoded['isAdmin'] == true) {
      return true
    }
    return false

  }
 */
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

register(credentials:any){
  console.log(credentials)
  return this.http.post('/users/register', credentials);
}

editUser(id,params){
  return this.http.put(`/users/${id}`, params)
  .pipe(map(x=>{
    if(id===this.currenUserSubjectValue.id){
      //updateLicalStorage
      const user = {...this.currentUser, ...params}
      localStorage.setItem('currentUser', JSON.stringify(user))
      //publish updated user
      this.currentUserSubject.next(user)
    }
    return x;
   }))
}
}
