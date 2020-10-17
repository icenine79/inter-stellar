import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../global-features/models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private currentUserSubject: BehaviorSubject<User>
currentUser: Observable<User>
  constructor(private http: HttpClient, private router:Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   get currentUserValue():User{
     return this.currentUserSubject.value;
   }

   isLoggedIn(): boolean{
    const user = localStorage.getItem('currentUser')
     return (user!=null)?true:false;
   }
register(credentials:any){
  return this.http.post('/users/register', credentials);
}
login(credentials){
  return this.http.post('/users/authenticate', credentials)
  .pipe(map(user=>{
    if(user)
    localStorage.setItem('currentUser',JSON.stringify(user));
    return user;
  }))
}



   logOut(){
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);
      this.router.navigate(['/login'])
   }
   editUser(id,params){
    return this.http.put(`/users/${id}`, params)
    .pipe(map(x=>{
      if(id===this.currentUserValue.id){
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
