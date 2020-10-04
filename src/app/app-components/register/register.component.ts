import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../global-features/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup
  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm= this.fb.group({
      username:['', Validators.required],
      email:['', Validators.required],
      password:[null, Validators.required]
    })
  }

onSubmit(){
  if(this.registerForm.invalid)return

}

}
