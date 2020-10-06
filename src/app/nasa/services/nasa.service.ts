import { DayPicture } from './../models/DayPicture';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from '../../global-features/models/User';
@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }


  getDayPictre(): Observable<DayPicture> {
    return this.http.get<DayPicture>(environment.dayPicture);
  }

  getDetailPicture(title: any): Observable<any> {
    return this.http.get<any>(environment.dayPicture)
      .pipe(map(res => {

        let response = Array.of(res)
        if (response != null || undefined) {
          return response.filter(x => x.title === title)
        }
      }))
  }
//ROVERS

getPicByCamera(camera: string){
  return this.http.get<any>(environment.camUrl+camera+environment.apiKey)
  .pipe(map(result=>{
    let res: any[]=result['photos']
  return res;
  }))
}

getUserById(id): Observable<User>{
  return this.http.get<User>(`/users/${id}`)
}




}
