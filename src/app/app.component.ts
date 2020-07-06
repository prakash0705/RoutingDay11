import { Component } from '@angular/core';
import {FormBuilder,Validators, EmailValidator} from "@angular/forms";
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Routing';

  constructor(private activateroute:ActivatedRoute)
  {

  }






}

