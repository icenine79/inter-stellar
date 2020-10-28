import { RegisterComponent } from './../../../app-components/register/register.component';
import { AuthService } from './../auth.service';
import { CanDeactivate} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditGuardService implements CanDeactivate<RegisterComponent> {

  constructor() { }

  canDeactivate(component: RegisterComponent):boolean{
    if(component.form.dirty){
      return confirm('Discard changes?')
    }
    return true;
  }
}
