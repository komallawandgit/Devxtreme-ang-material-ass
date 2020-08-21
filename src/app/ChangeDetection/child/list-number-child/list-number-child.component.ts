import { Component, OnInit,Input, ChangeDetectionStrategy} from '@angular/core';



@Component({
  selector: 'app-list-number-child',
  templateUrl: './list-number-child.component.html',
  styleUrls: ['./list-number-child.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListNumberChildComponent implements OnInit {
  @Input() name: string;


  constructor() { }

  ngOnInit() {
  }

}
