import { Component } from '@angular/core';
import {FormBuilder,Validators, EmailValidator} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  userForm;
  userDetails=[];
  constructor(private fb:FormBuilder)
  {
    this.userForm=this.fb.group({
      'name':this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      'email':this.fb.control('',Validators.required),
      'dob':this.fb.control('',Validators.required),
      'country':this.fb.control('',Validators.required),
      'gender':this.fb.control('',Validators.required),
      'favfood':this.fb.control('',Validators.required),
      'address':this.fb.array([
        this.fb.group({
        'street':this.fb.control(''),
        'door':this.fb.control(''),
        'pin':this.fb.control('')
        }),
        this.fb.group({
          'street':this.fb.control(''),
          'door':this.fb.control(''),
          'pin':this.fb.control('')
          })
      ])
    })
  }
submitForm()
{
  if(this.userForm.valid)
  {
    console.log(this.userForm.value);
    this.userDetails.push(this.userForm.value);
  }
}





}

