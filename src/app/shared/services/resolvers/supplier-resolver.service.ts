import { NasaService } from './../../../nasa/services/nasa.service';
import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../global-features/models/User';

@Injectable({
  providedIn: 'root',
})
export class SupplierResolverService implements Resolve<User> {
  constructor(private nasaService: NasaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.nasaService.getUserById(route.paramMap.get('id'));
  }
}
