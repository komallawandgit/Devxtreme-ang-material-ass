import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-list-number-parent',
  templateUrl: './list-number-parent.component.html',
  styleUrls: ['./list-number-parent.component.css']
})
export class ListNumberParentComponent implements OnInit {

  constructor() { }

  name = 'start';

  ngOnInit() {
    const messageAfter500ms$ = of('awesome-message').pipe(delay(10000))
    
    messageAfter500ms$.subscribe(name => this.name = name);
  }

}
