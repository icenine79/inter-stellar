import { AuthService } from './../../global-features/services/auth.service';
import { Router } from '@angular/router';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form } from '../../global-features/dynamic-forms/Form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    this.auth.logIn(credentials)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/home'])
    })
  }
}
