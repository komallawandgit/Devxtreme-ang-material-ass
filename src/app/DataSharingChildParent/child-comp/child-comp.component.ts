import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  name="child data";
  counter=10;
  student =[
    {
      id:1,
      name:"abc",
      address:"pune"

     }
]

mulStud=[
  { 
    id:1,
    name:'anya',
    marks:70,
    std:7
  },
  { 
    id:2,
    name:'aditi',
    marks:80,
    std:7
  },
  { 
    id:3,
    name:'ankita',
    marks:60,
    std:7
  },



  
]

@Output()  NameEvent= new EventEmitter<string>();
@Output() studEvent= new EventEmitter<object>();
@Output() couunterEvent= new EventEmitter<number>();
@Output()  mulStudevent=new EventEmitter<object>();

sendName(name:string)
{
  this.NameEvent.emit(name);
}


getStudent(student:object){
  this.studEvent.emit(student);
  console.log(student);

}

counterIncrement(counter:number){
  this.counter++;
  this.couunterEvent.emit(this.counter)
}
  
multiStudent(mulStud:object){
  this.mulStudevent.emit(this.mulStud)

}
  constructor() { }

  ngOnInit() {
  }

}
