import { Injectable } from '@angular/core';

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
}
]
@Injectable({
  providedIn: 'root'
})
export class MatTableDataService {
  getSaleData(){
    return sales;
  }

  constructor() { }
}
