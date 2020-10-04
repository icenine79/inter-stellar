import { AuthService } from './../../global-features/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  successMessage:string='';
  errorMessage:boolean=false;
  loading:boolean;
    constructor(private authService: AuthService,
      private fb:FormBuilder, private router: Router,
      ) {
    }

    ngOnInit():void {
      this.loginForm = this.fb.group({
        username:['',Validators.required],
        password:['', Validators.required]
      })

    }
  get username(){return this.loginForm.get('username')};
  get password(){return this.loginForm.get('password')};

    onSubmit(){
      if(this.loginForm.invalid)return
      let credentials={
        username: this.username.value,
        password: this.password.value
      }
      this.authService.logIn(credentials)
      .subscribe(data=>{
        this.router.navigate(['/home'])
      })
      }



  }
