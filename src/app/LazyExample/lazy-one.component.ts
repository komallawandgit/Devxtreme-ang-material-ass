import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-one',
  templateUrl: './lazy-one.component.html',
  styleUrls: ['./lazy-one.component.css']
})
export class LazyOneComponent implements OnInit {
  name="select Lazycomponent";
  lazyComponent=["lazy component message1","lazy component message2", "lazy component message3",]
  constructor() { }

  ngOnInit() {
  }

}
