import { Component, OnInit } from '@angular/core';
import{person} from '../../child/simple-child/simple-child.component';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  public count: number = 1;

  public person: person = {
    name: 'abc',
    age: 18
  };
  constructor() { }

  ngOnInit() {
  }

  public ngDoCheck(): void {
    console.log('AppComponent: Change detection count = ' + (this.count++));
  }
  reassign():void{
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }

}
