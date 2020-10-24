import { Router } from '@angular/router';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form } from '../../global-features/dynamic-forms/Form';
import { AuthService } from '../../shared/services/auth.service';
import { Fader } from '../../shared/animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [Fader.animations]
})
export class LoginComponent extends Form implements OnInit {
  constructor(private auth: AuthService, private router:Router) {
    super();
  }

  ngOnInit(): void {
    this.formBuilder();
  }
  onSubmit() {
if(this.form.invalid)return
let credentials={
  username: this.username.value,
  password: this.password.value
}
    this.auth.login(credentials)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home'])
    })
  }
}
