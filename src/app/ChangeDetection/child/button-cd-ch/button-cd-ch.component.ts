import { Component, OnInit, Input ,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-button-cd-ch',
  templateUrl: './button-cd-ch.component.html',
  styleUrls: ['./button-cd-ch.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
  
})
export class ButtonCdChComponent implements OnInit {
@Input() name:string;
@Input() object:object;
  constructor() { }

  ngOnInit() {
  }

}
