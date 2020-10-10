import { NasaService } from './../../nasa/services/nasa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../global-features/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { first, switchMap } from 'rxjs/operators';
import { User } from '../../global-features/models/User';
import { Form } from '../../global-features/dynamic-forms/Form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends Form implements OnInit {
registerForm: FormGroup
id:any
user: User;
editMode:boolean;
  constructor(
    private auth: AuthService,
    private route:ActivatedRoute,
    private fb: FormBuilder,
     private router: Router,
     private nasa: NasaService) {super() }

  ngOnInit(): void {
    this.formBuilder()
    //checkUrl
    if(this.router.url.match('/edit/'))
      this.editMode=true;

    //Get user params

    this.route.paramMap.pipe(switchMap(params=>{
      this.id= params.get('id')
       return this.nasa.getUserById(this.id)

       })).subscribe(user=>{
         this.user=user;
       })

//RegisterForm

  }

get username(){return this.registerForm.get('username')}

get email(){return this.registerForm.get('email')}
get password(){return this.registerForm.get('password')}

onSubmit(){
  if(this.registerForm.invalid)return
  let credentials={
    username: this.username.value,
    email: this.email.value,
    password: this.password.value
  }
  this.auth.register(credentials)
  .subscribe((data:Response)=>{
    console.log(data)
    this.router.navigate(['/login'])

  })


}
registrationForm(){
  this.registerForm= this.fb.group({
    username:['', Validators.required],
    email:['', Validators.required],
    password:[null, Validators.required]
  })
}
editUser() {
  this.auth.editUser(this.id, this.registerForm.value)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error)
      });
}
}
