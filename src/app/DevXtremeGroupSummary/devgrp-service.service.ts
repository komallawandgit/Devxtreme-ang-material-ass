import { Injectable } from '@angular/core';
export class Order {
  ID: number;
  OrderNumber: number;
  OrderDate: string;
  SaleAmount: number;
  TotalAmount: number;
  Terms: string;
  CustomerStoreState: string;
  CustomerStoreCity: string;
  Employee: string;
}


let orders: Order[] = [{
  "ID" : 1,
  "OrderNumber" : 35703,
  "OrderDate" : "2014-04-10",
  "SaleAmount" : 11800,
  "Terms" : "15 Days",
  "TotalAmount" : 12175,
  "CustomerStoreState" : "California",
  "CustomerStoreCity" : "Los Angeles",
  "Employee" : "Harv Mudd"
}, {
  "ID" : 4,
  "OrderNumber" : 35711,
  "OrderDate" : "2014-01-12",
  "SaleAmount" : 16050,
  "Terms" : "15 Days",
  "TotalAmount" : 16550,
  "CustomerStoreState" : "California",
  "CustomerStoreCity" : "San Jose",
  "Employee" : "Jim Packard"
}, {
  "ID" : 5,
  "OrderNumber" : 35714,
  "OrderDate" : "2014-01-22",
  "SaleAmount" : 14750,
  "Terms" : "15 Days",
  "TotalAmount" : 15250,
  "CustomerStoreState" : "Nevada",
  "CustomerStoreCity" : "Las Vegas",
  "Employee" : "Harv Mudd"
}, {
  "ID" : 7,
  "OrderNumber" : 35983,
  "OrderDate" : "2014-02-07",
  "SaleAmount" : 3725,
  "Terms" : "15 Days",
  "TotalAmount" : 3850,
  "CustomerStoreState" : "Colorado",
  "CustomerStoreCity" : "Denver",
  "Employee" : "Todd Hoffman"
}, {
  "ID" : 9,
  "OrderNumber" : 36987,
  "OrderDate" : "2014-03-11",
  "SaleAmount" : 14200,
  "Terms" : "15 Days",
  "TotalAmount" : 14800,
  "CustomerStoreState" : "Utah",
  "CustomerStoreCity" : "Salt Lake City",
  "Employee" : "Clark Morgan"
}
];

@Injectable({
  providedIn: 'root'
})
export class DevgrpServiceService {
  getOrders() {
    return orders;
}
  constructor() { }
}
