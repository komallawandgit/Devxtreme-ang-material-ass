import { Component, OnInit,ViewChild} from '@angular/core';
import{MatDatepicker} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatFormFieldControl} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
 
@Component({
  selector: 'app-ang-material-form',
  templateUrl: './ang-material-form.component.html',
  styleUrls: ['./ang-material-form.component.css'],
  
})


export class AngMaterialFormComponent implements OnInit {
  constructor(){

  }

  public rgForm: FormGroup;


   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

 AddressFormControl=new FormControl('',[
    Validators.required,
   
   ]);
   AgeFormControl= new  FormControl('',[
    Validators.required,
   ]);

   lstNameFormControl= new FormControl('',[
     Validators.required
   ]);
   fstNameFormControl= new FormControl('',[
     Validators.required,
    
   ])
  GenderFormControl= new FormControl('',[
   Validators.required,
  ]);

   carsFormControl=new FormControl('',[
     Validators.required,
   ]);

  cityFormControl=new FormControl('',[
    Validators.required,
  ]);
  dateFormControl= new FormControl('',[
    Validators.required,
   ])
  
  
  
  matcher = new MyErrorStateMatcher();

  onSubmit(){
    Validators.required;
  }

  selectedCountry:any;
  person=[];
  city=['pune','mumbai','nashik'];
  clients = [
    { id : 'id1', clientName: 'Bruce'},
    { id : 'id2', clientName: 'Ben'},
    { id : 'id3', clientName: 'Peter'}
  ];
  startDate = new Date(1990, 0, 1);
  ngOnInit(){
    // this.rgForm = new FormGroup({
    //   emailFormControl:new FormControl('', [
    //     Validators.required,
    //     Validators.email,
    //   ]),
    
    //   AddressFormControl:new FormControl('',[
    //     Validators.required,
       
    //   ]),
    //   AgeFormControl:new  FormControl('',[
    //     Validators.required,
    //   ]),
    
    //   lstNameFormControl:new FormControl('',[
    //     Validators.required
    //   ]),
    //   fstNameFormControl: new FormControl('',[
    //     Validators.required,
        
    //   ]),
    //   GenderFormControl: new FormControl('',[
    //     Validators.required,
    //   ]),
    
    //   carsFormControl:new FormControl('',[
    //     Validators.required,
    //   ]),
    
    //   cityFormControl:new FormControl('',[
    //     Validators.required,
    //   ]),
    //   dateFormControl:new FormControl(new Date()),
    
    //  });

 
  } 
 

  

}