import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ang-material-validation',
  templateUrl: './ang-material-validation.component.html',
  styleUrls: ['./ang-material-validation.component.css']
})
export class AngMaterialValidationComponent implements OnInit {
  title = 'MyShopApp';

  public addShopFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addShopFormGroup = new FormGroup({
      FirstName : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      lastName : new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(200)]),
      city: new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(200)]),
      state:new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(200)]),
      Car:new FormControl('', [Validators.required]),
      comments : new FormControl('', [Validators.required, Validators.maxLength(200)]),
     
      

    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addShopFormGroup.controls[controlName].hasError(errorName);
  }

}
