import { Component, OnInit } from '@angular/core';
import{NavserviceService} from '../navservice.service';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(public navService: NavserviceService) { }

  ngOnInit() {
  }

}
