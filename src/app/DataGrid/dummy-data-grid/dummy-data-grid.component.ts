import { Component, OnInit } from '@angular/core';
import  {ServiceDemoService} from '../../devextrme/service-demo.service';
import{Client} from '../../devextrme/service-demo.service';
 
@Component({
  selector: 'app-dummy-data-grid',
  templateUrl: './dummy-data-grid.component.html',
  styleUrls: ['./dummy-data-grid.component.css']
})
export class DummyDataGridComponent implements OnInit {

  dataSource: Client[];

  constructor(public service:ServiceDemoService) { 
    this.dataSource=service.getClient();
  }

  ngOnInit() {
    
  }

}


