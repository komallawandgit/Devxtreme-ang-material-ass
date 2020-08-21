import { Component, OnInit,ChangeDetectionStrategy, Input ,DoCheck} from '@angular/core';

@Component({
  selector: 'app-simple-child',
  templateUrl: './simple-child.component.html',
  styleUrls: ['./simple-child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class SimpleChildComponent implements OnInit {
  public count: number = 1;
  @Input() person: person;

  public ngDoCheck(): void {
    console.log('SimpleChildComponent: Change Detection count = ' + (this.count++));
  }
  ngOnInit(){

  }
}
export interface person{
  name:string;
  age:number;
}
