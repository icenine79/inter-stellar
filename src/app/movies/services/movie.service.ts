import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  name: string;
  constructor(private http: HttpClient) {}

  getTrailer(movie){
  return this.http.get(
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+movie+"&topicId=%2Fm%2F02vxn&key=AIzaSyB42WhSTkS6_0uUPX6EuGakkGz4RHXnlIc"
  ).pipe(
    map(res => res['items']),
    map((items: Array<any>) => {
      return items.map(item => ({
        title: item.snippet.title,
        videoUrl:  `https://www.youtube.com/embed/${item.id.videoId}`,
      }))
    })
  );
}

  getEpisode(name: string, episode: string):Observable<Movie> {
    console.log(name,episode)
    this.name = name;
    return this.http.get<Movie>(
      "https://www.omdbapi.com/?t=" +
        name +
        "&Season=" +
        episode +
        "&apikey=87c31e60"
    );
  }


 getMovies(name: string): Observable<Movie> {
    return this.http.get<Movie>("https://www.omdbapi.com/?t=" + name + "&plot=full&apikey=87c31e60");

  }
  //FAKEBACKEND
addComment(comment:any){
  return this.http.post('/comment', comment);
}
getComments(){
return this.http.get('/comments');
}
}
