import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
  mastername:string;
  studData:any=[];
 MulStudent:any=[];

  Counter:number;
  id:number;

  constructor() { }

  ngOnInit() {
  }

  sendName(name:string){
    this.mastername=name;

  }



  getStudent(studData:any){
     this.studData=studData; 
    
     console.log(this.studData);
  }

  counterIncrement(counter:number){
    this.Counter=counter;

  }

  multiStudent(MulStudent:object){
    this.MulStudent=MulStudent;

  }


  delete(id:number){
    let i=this.MulStudent.findIndex(s => s.id == this.id);
    if(i == -1){
      this.MulStudent.splice(i,1);
    }
    
    }
  }


