import { NasaService } from './../../nasa/services/nasa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../global-features/models/User';
import { Form } from '../../global-features/dynamic-forms/Form';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends Form implements OnInit {
  id: any;
  user: User;
  editMode: boolean;
  currentUser: User;
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private nasa: NasaService
  ) {
    super();
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser'));
    this.formBuilder();
    //checkUrl
    if (this.router.url.match('/edit/')) this.editMode = true;
    //Get current
    this.auth.currentUser.subscribe((user) => {
      this.currentUser = user;
      this.username.setValue(this.currentUser.username)
      this.password.setValue(this.currentUser.password)

       });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let credentials = {
      username: this.username.value,
      password: this.password.value,
    };

    this.auth.register(credentials).subscribe((data: Response) => {
      console.log(data);
      this.router.navigate(['/login']);
    });
  }

editUser() {
  this.auth.editUser(this.id, this.form.value)
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
