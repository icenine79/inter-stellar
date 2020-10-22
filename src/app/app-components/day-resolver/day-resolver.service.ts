import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { NasaService } from './../../nasa/services/nasa.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayResolverService implements Resolve<any> {

  constructor(private nasaService: NasaService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.nasaService.getDetailPicture(route.paramMap.get('title'));
  }
}
