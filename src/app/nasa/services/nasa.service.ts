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
  //https://images-api.nasa.gov/album/Artemis
  constructor(private http: HttpClient) { }


  getDayPicture(): Observable<DayPicture> {
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

public getDataImage(id: number){
return this.http.get<any>(environment.baseUrl+environment.apiKey)
.pipe(map(res=>{
  let response = Array.of(res)
  return response.filter(x=>x.id===id)
}))
}


getPicByCamera(camera: string){
  return this.http.get<any>(environment.camUrl+camera+environment.apiKey)
  .pipe(map(result=>{
    console.log(result)
    let res: any[]=result['photos']
  return res;
  }))
}
//ALbums, NASA missions

getNasaAlbum(album:string){
return this.http.get('https://images-api.nasa.gov/album/Artemis')
.pipe(map(res=>{
  let x = res['collection']['items']
  return x
}));
}




getUserById(id): Observable<User>{
  return this.http.get<User>(`/users/${id}`)
}


//FAKEBACKEND

likeDayPic(likeObject: Object){
  console.log(likeObject)
  return this.http.post('/likedaypic',likeObject)
}
getPictures(){
  return this.http.get('/pictures');
}
/* deletePicture(picture){
return this.http.delete(`/pictures/${picture}`);
} */

}
