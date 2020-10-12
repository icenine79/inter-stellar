import { Validators } from "@angular/forms"

const formTemplate= [
 {
  type: "text",
  label: "username",
  required: Validators.required,
  class: 'form-control',
  name: 'username'
},
{
  type: "number",
  label: "age",
  required: Validators.required,
  class: 'form-control',
  name:'age'
},
{
  type: "number",
  label: "phone",
  required: Validators.required,
  class: 'form-control',
  name:'phone'
},
{
  type: "email",
  label: "email",
  required: Validators.required,
  class: 'form-control',
  name:'email'
},
{
  type: "password",
  label: "password",
  name: "password",
  required: Validators.required,
  class: 'form-control'
},
{
  type: "password",
  label: "retype",
  name: "retype",
  required: Validators.required,
  class: 'form-control'
},
{
  type: "text",
  label: "street",
  name: "street",
  required: Validators.required,
  class: 'form-control'
},
{
  type: "text",
  label: "city",
  name: "city",
  required: Validators.required,
  class: 'form-control'
},
{
  type: "select",
  label: "select",
  options: [],
  class: 'form-control',
  name: 'select',
  required: Validators.required,
},
{
  type: "submit",
  label: "submit",
  options: [],
  class: 'btn btn-primary',
  name: 'submit',
  required:false,
  value: "Submit"
}
]
export default formTemplate
