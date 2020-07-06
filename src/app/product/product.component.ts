import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productForm;
product="product";
count=0;
value;
iterator=0;
productArray=[];
  constructor(private fb:FormBuilder) { 
    this.productForm=this.fb.group({
      'name':this.fb.control('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      'price':this.fb.control('',[Validators.required]),
      'stock':this.fb.control('', [Validators.required])
    })
    
  }

  ngOnInit(): void {


  }

  submitForm()
  {
    this.product=this.product+this.count;
    window.localStorage.setItem(this.product,JSON.stringify({
      count:this.productForm.value
    }))
    this.productArray[this.count]=window.localStorage.getItem(this.product);
    this.productArray[this.count]=JSON.parse(this.productArray[this.count]);
    this.product=this.product+this.count;
    this.count++;
    this.product=this.product.substring(0,this.product.length-2);    
    console.log(this.productForm.value);
    
    
  }

}
