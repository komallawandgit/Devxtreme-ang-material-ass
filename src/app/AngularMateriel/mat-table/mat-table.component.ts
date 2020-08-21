import { Component, OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material';
import { MatSort} from '@angular/material';



@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {
  displayedColumns = ['id', 'region', 'country', 'city','amount','date'];
  dataSource = new MatTableDataSource<Sale>(sales);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
 
  ngAfterViewInit() {
    this.dataSource.sort=this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;

  }



}
export class Sale {
  id: number;
  region: string;
  country: string;
  city: string;
  amount: number;
  date: Date;
}

let sales: Sale[] =  [
  {
  "id": 10248,
  "region": "North America",
  "country": "United States of America",
  "city": "New York",
  "amount": 1740,
  "date": new Date("2013-01-06")
},
{
  "id": 10249,
  "region": "North America",
  "country": "United States of America",
  "city": "Los Angeles",
  "amount": 850,
  "date": new Date("2013-01-13")
},
{
  "id": 10264,
  "region": "Australia",
  "country": "Australia",
  "city": "Melbourne",
  "amount": 2220,
  "date": new Date("2013-01-15")
}, 
{
  "id": 10265,
  "region": "Africa",
  "country": "South Africa",
  "city": "Pretoria",
  "amount": 940,
  "date": new Date("2013-01-01")
}, 
{
  "id": 10266,
  "region": "Africa",
  "country": "Egypt",
  "city": "Cairo",
  "amount": 1630,
  "date": new Date("2013-01-10")
},
 {
  "id": 10267,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 2910,
  "date": new Date("2013-01-23")
}
]


