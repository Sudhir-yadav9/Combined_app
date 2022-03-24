import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  submitted =false;
  constructor(private fb : FormBuilder) { }
  
  

  form=this.fb.group({

    name : ['',[Validators.required,Validators.minLength(5),Validators.pattern('^[a-z]+$')]],
 
    city :[ '',[Validators.required,Validators.minLength(5),Validators.pattern('^[a-z]+$')]],
 
  })

  ngOnInit(): void {

    
  }

  
  get f():
  { 
    [key:string]:AbstractControl }
  {
    return this.form.controls;
  }

  afterSubmitt()
  {
    this.submitted=true;
    if(this.form.invalid)
    {
      return;
    }

    alert(JSON.stringify(this.form.value));
  }



}
