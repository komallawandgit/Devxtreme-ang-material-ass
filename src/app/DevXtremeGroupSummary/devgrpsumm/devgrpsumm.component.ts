import { Component, OnInit } from '@angular/core';
import {DevgrpServiceService} from '../devgrp-service.service';
import{Order} from '../devgrp-service.service';

@Component({
  selector: 'app-devgrpsumm',
  templateUrl: './devgrpsumm.component.html',
  styleUrls: ['./devgrpsumm.component.css']
})
export class DevgrpsummComponent implements OnInit {
  orders: Order[];
  constructor(public service:DevgrpServiceService ) {
    this.orders=service.getOrders();
   }

  ngOnInit() {
  }

}
