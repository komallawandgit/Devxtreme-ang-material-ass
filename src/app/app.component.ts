import { Component, OnInit} from '@angular/core';
import{createCustomElement} from '@angular/elements';
import { TestFieldComponent } from './RegistartionClient/test-field/test-field.component';
import { ChcekboxComponent } from './RegistartionClient/chcekbox/chcekbox.component';
import { NgModule, Injector } from '@angular/core';
import{ FormsModule} from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {VERSION} from '@angular/material';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  log:boolean=false;



//  public myDropDown : string;
//  jsonUrl="assets/client.json";
//   client1=[];
//  data=[];
//  client3=[];
//   constructor(injector:Injector,public http:HttpClient){
//     const textEle= createCustomElement(TestFieldComponent,{injector})
//     customElements.define('app-test-field',textEle);
//     const checkEle=createCustomElement(ChcekboxComponent,{injector})
//     customElements.define('app-chcekbox',checkEle);
    //   }

    constructor(public  router:Router){

    }
  ngOnInit(){
    this.log=true;
    this.router.navigate(["login"]);
   

    // this.getJSON().subscribe(data=>{
    //   debugger;
    //   console.log(data);
    //   this.data=data;
    //   this.clientArray=data.clientArray;
    // });
  }
  

  //   public clientArray = [] ;


  

  // getJSON():Observable<any>{
  //   return this.http.get(this.jsonUrl);

  // }

  
       
      //   value:any;
      //  onChangeofOptions(newGov) {
      //    debugger;
      //      console.log(newGov);
      //      for(let i=0;i<this.clientArray.length;i++)
      //      {
      //        debugger;
      //        if(this.myDropDown==this.clientArray[i])
      //        {
      //           let clientName = this.myDropDown; 
      //           console.log(this.data[clientName]);
      //           this.client1=this.data[clientName];
              
               
      //        }
      //      }

          // if(this.myDropDown == 'client1'){
          //   this.client1 = this.client1;
          //  }
          //  if(this.myDropDown == 'client2'){

          //     this.client1 = this.client2;
          //   }
          //   if(this.myDropDown == 'client3'){
          //     this.client1 = this.client3;
          //   }

      }


      // studSelect:any;

// ChangeStud(stud){
//   console.log(stud);
//   if(this.studSelect == 'stud1'){
//     this.stud1 = this.stud1;
//    }
//    if(this.studSelect == 'stud2'){

//       this.stud1 = this.stud2;
//     }
//     if(this.studSelect == 'stud3'){
//       this.stud1 = this.stud3;
//     }







  
 

