import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  customers: any[] = [
    {
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "Address": "702 SW 8th Street",
    "City": "Bentonville",
    "State": "Arkansas",
    "Zipcode": 72716,
    "Phone": "(800) 555-2797",
    "Fax": "(800) 555-2171",
    "Website": "http://www.nowebsitesupermart.com"
  }, 
  {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "Address": "2455 Paces Ferry Road NW",
    "City": "Atlanta",
    "State": "Georgia",
    "Zipcode": 30339,
    "Phone": "(800) 595-3232",
    "Fax": "(800) 595-3231",
    "Website": "http://www.nowebsitedepot.com"
  }, 
  {
    "ID": 3,
    "CompanyName": "K&S Music",
    "Address": "1000 Nicllet Mall",
    "City": "Minneapolis",
    "State": "Minnesota",
    "Zipcode": 55403,
    "Phone": "(612) 304-6073",
    "Fax": "(612) 304-6074",
    "Website": "http://www.nowebsitemusic.com"
  } ,
  {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "Address": "999 Lake Drive",
    "City": "Issaquah",
    "State": "Washington",
    "Zipcode": 98027,
    "Phone": "(800) 955-2292",
    "Fax": "(800) 955-2293",
    "Website": "http://www.nowebsitetomsclub.com"
  },
   {
    "ID": 5,
    "CompanyName": "E-Mart",
    "Address": "3333 Beverly Rd",
    "City": "Hoffman Estates",
    "State": "Illinois",
    "Zipcode": 60179,
    "Phone": "(847) 286-2500",
    "Fax": "(847) 286-2501",
    "Website": "http://www.nowebsiteemart.com"
}, 
{
    "ID": 6,
    "CompanyName": "Walters",
    "Address": "200 Wilmot Rd",
    "City": "Deerfield",
    "State": "Illinois",
    "Zipcode": 60015,
    "Phone": "(847) 940-2500",
    "Fax": "(847) 940-2501",
    "Website": "http://www.nowebsitewalters.com"
}
];




client: any[] = [
  {
    "id":1,
    "Name":"anya",
    "address":"pune",
    "state":"maharashtra",
    "zipcode":411036,
    "age":25
  },
  {
    "id":2,
    "Name":"aditi",
    "address":"pune",
    "state":"maharashtra",
    "zipcode":411036,
    "age":25
  },
  {
    "id":3,
    "Name":"anika",
    "address":"pune",
    "state":"maharashtra",
    "zipcode":411036,
    "age":25
  }
];

  constructor() { }


  getEmployees() {
    return employees;
}
getStates() {
    return states;
}
}

let states: State[] = [{
  "ID": 1,
  "Name": "united"
}, {
  "ID": 2,
  "Name": "london"
}, {
  "ID": 3,
  "Name": "africa"
}, {
  "ID": 4,
  "Name": "Afganistan"
}, {
  "ID": 5,
  "Name": "Cheennai"
}, {
  "ID": 6,
  "Name": "b"
}]

let employees: Employee[] = [{
  "ID": 1,
  "FirstName": "shalaka",
  "LastName": "shinde",
  "Prefix": "Ms.",
  "Position": "developer",
  "Picture": "images/employees/01.png",
  "BirthDate": "1964/03/16",
  "HireDate": "1995/01/15",
  "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
  "Address": "351 S Hill St.",
  "StateID": 5
}, {
  "ID": 2,
  "FirstName": "megha",
  "LastName": "more",
  "Prefix": "Mrs.",
  "Position": "Hr",
  "Picture": "images/employees/09.png",
  "BirthDate": "1981/06/03",
  "HireDate": "2012/05/14",
  "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
  "Address": "807 W Paseo Del Mar",
  "StateID": 5
}, {
  "ID": 3,
  "FirstName": "niharika",
  "LastName": "shinde",
  "Prefix": "Ms.",
  "Position": "java expert",
  "Picture": "images/employees/03.png",
  "BirthDate": "1974/09/07",
  "HireDate": "2002/11/08",
  "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
  "Address": "4 Westmoreland Pl.",
  "StateID": 4
}, {
  "ID": 4,
  "FirstName": "sonali",
  "LastName": "pande",
  "Prefix": "Ms.",
  "Position": "Sales",
  "Picture": "images/employees/04.png",
  "BirthDate": "1977/11/22",
  "HireDate": "1998/04/23",
  "Notes": "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
  "Address": "1700 S Grandview Dr.",
  "StateID": 11
}]



export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    Picture: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
    StateID: number;
}

export class State {
    ID: number;
    Name: string;
}
