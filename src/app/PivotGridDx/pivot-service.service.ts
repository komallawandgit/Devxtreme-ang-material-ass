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
},
{
  "id": 10250,
  "region": "North America",
  "country": "United States of America",
  "city": "Denver",
  "amount": 2235,
  "date": new Date("2013-01-07")
}, 
{
  "id": 10251,
  "region": "North America",
  "country": "Canada",
  "city": "Vancouver",
  "amount": 1965,
  "date": new Date("2013-01-03")
}, 
{
  "id": 10252,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 880,
  "date": new Date("2013-01-10")
}, 
{
  "id": 10253,
  "region": "South America",
  "country": "Brazil",
  "city": "Rio de Janeiro",
  "amount": 5260,
  "date": new Date("2013-01-17")
},
{
  "id": 10255,
  "region": "South America",
  "country": "Paraguay",
  "city": "Asuncion",
  "amount": 3140,
  "date": new Date("2013-01-01")
}, 
{
  "id": 10256,
  "region": "Europe",
  "country": "United Kingdom",
  "city": "London",
  "amount": 6175,
  "date": new Date("2013-01-24")
}, 
{
  "id": 10257,
  "region": "Europe",
  "country": "Germany",
  "city": "Berlin",
  "amount": 4575,
  "date": new Date("2013-01-11")
},
{
  "id": 10258,
  "region": "Europe",
  "country": "Spain",
  "city": "Madrid",
  "amount": 3680,
  "date": new Date("2013-01-12")
},
 {
  "id": 10259,
  "region": "Europe",
  "country": "Russian Federation",
  "city": "Moscow",
  "amount": 2260,
  "date": new Date("2013-01-01")
},
{
  "id": 10260,
  "region": "Asia",
  "country": "China",
  "city": "Beijing",
  "amount": 2910,
  "date": new Date("2013-01-26")
}, 
{
  "id": 10261,
  "region": "Asia",
  "country": "Japan",
  "city": "Tokyo",
  "amount": 8400,
  "date": new Date("2013-01-05")
},
{
  "id": 10262,
  "region": "Asia",
  "country": "Republic of Korea",
  "city": "Seoul",
  "amount": 1325,
  "date": new Date("2013-01-14")
}, 
{
  "id": 10263,
  "region": "Australia",
  "country": "Australia",
  "city": "Sydney",
  "amount": 3920,
  "date": new Date("2013-01-05")
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
}];

@Injectable({
  providedIn: 'root'
})
export class PivotServiceService {
  getSales(){
  return sales;


}
  constructor() { }
}
