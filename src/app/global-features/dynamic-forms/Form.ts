import { FormControl, FormGroup } from '@angular/forms';
import formTemplate from './form-template';

export class Form {
  form: FormGroup;
  formTemplate: any = formTemplate;

  constructor() {}

  formBuilder() {
    let group = {};

    formTemplate.forEach((input) => {
      group[input['label']] = new FormControl();
    });
    this.form = new FormGroup(group);
  }
  get name() {
    return this.form.get('name');
  }
  get age() {
    return this.form.get('age');
  }
  get email() {
    return this.form.get('email');
  }
  get street() {
    return this.form.get('street');
  }
  get city() {
    return this.form.get('city');
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }
}
