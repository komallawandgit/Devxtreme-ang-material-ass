import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any=[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    debugger;
   if(this.model.userName=="komallawand" && this.model.password=="komal123" ){
   
    this.router.navigate(["./DashBoard"],{ replaceUrl: true });
  
   }
   else
   {
     alert("inavlid password please enter correct password");
   }
  }
}
