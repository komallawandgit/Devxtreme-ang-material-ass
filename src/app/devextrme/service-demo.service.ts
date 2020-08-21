import { Injectable } from '@angular/core';

export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
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

export class Client{
  ID:number;
  FirstName:string;
  LastName:string;
  Company:string;
  Address:string;
  City:string;
  Country :string;
  State:string
  Web:string;

}



let client: Client[] = [{
  "ID":1,
  "FirstName":"neha",
  "LastName":"ovhal",
  "Company":"accenture",
  "Address":"wagholi",
  "City":"pune",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.neha.com"
},
{
  "ID":2,
  "FirstName":"niharika",
  "LastName":"shinde",
  "Company":"amdoc",
  "Address":"hinjewadi",
  "City":"pune",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.niharika.com"
},
{
  "ID":3,
  "FirstName":"srswati",
  "LastName":"bhatmode",
  "Company":"fijutsu",
  "Address":"tathwadeMiDc",
  "City":"pune",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.srswati.com"
},
{
  "ID":4,
  "FirstName":"ganesh",
  "LastName":"salukhe",
  "Company":"GS system",
  "Address":"satara",
  "City":"pune",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.gs.com"
},
{
  "ID":5,
  "FirstName":"rupali",
  "LastName":"suryavanshi",
  "Company":"Eon ",
  "Address":"kharadi",
  "City":"pune",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.rupali.com"
},
{
  "ID":6,
  "FirstName":"mahesh",
  "LastName":"kale",
  "Company":"tcs",
  "Address":"mumbai",
  "City":"mumbai",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.mahesh.com"
},
{
  "ID":7,
  "FirstName":"vaibhav",
  "LastName":"patil",
  "Company":"VP System",
  "Address":"wagholi",
  "City":"pune",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.vp.com"
},
{
  "ID":8,
  "FirstName":"supriya",
  "LastName":"bhuskte",
  "Company":"sb system",
  "Address":"turbhe",
  "City":"mumbai",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.supi.com"
},
{
  "ID":9,
  "FirstName":"shubam",
  "LastName":"pathare",
  "Company":"ABps System",
  "Address":"thane",
  "City":"mumbai",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.supi.com"
},
{
  "ID":10,
  "FirstName":"sonali",
  "LastName":"pathare",
  "Company":"ABps System",
  "Address":"thane",
  "City":"mumbai",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.supi.com"
},
{
  "ID":11,
  "FirstName":"rupali",
  "LastName":"Ghadge",
  "Company":"majri ",
  "Address":"majri",
  "City":"manjri",
  "Country" :"india",
  "State":"maharashtra",
  "Web":"www.supi.com"
},

];


let employees: Employee[] = [{
  "ID": 1,
  "FirstName": "aditi",
  "LastName": "more",
  "Prefix": "Ms.",
  "Position": "Developer",
  "BirthDate": "1964/03/16",
  "HireDate": "1995/01/15",
  "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
  "Address": "351 S Hill St.",
  "StateID": 1
}, {
  "ID": 2,
  "FirstName": "kanchan",
  "LastName": "uparwat",
  "Prefix": "Mrs.",
  "Position": "Sales Assistant",
  "BirthDate": "1981/06/03",
  "HireDate": "2012/05/14",
  "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
  "Address": "807 W Paseo Del Mar",
  "StateID":2
}, {
  "ID": 3,
  "FirstName": "dipali",
  "LastName": "d",
  "Prefix": "Ms.",
  "Position": "Accountant",
  "BirthDate": "1974/09/07",
  "HireDate": "2002/11/08",
  "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
  "Address": "4 Westmoreland Pl.",
  "StateID": 3
}, {
  "ID": 4,
  "FirstName": "Geeta",
  "LastName": "Sing",
  "Prefix": "Ms.",
  "Position": "HR ",
  "BirthDate": "1977/11/22",
  "HireDate": "1998/04/23",
  "Notes": "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
  "Address": "1700 S Grandview Dr.",
  "StateID": 4
}, {
  "ID": 5,
  "FirstName": "girija",
  "LastName": "bade",
  "Prefix": "Ms.",
  "Position": "Angular",
  "BirthDate": "1968/12/01",
  "HireDate": "2009/03/06",
  "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
  "Address": "1120 Old Mill Rd.",
  "StateID": 5
},
{
  "ID": 6,
  "FirstName": "shailja",
  "LastName": "nikam",
  "Prefix": "Ms.",
  "Position": "Angular",
  "BirthDate": "1968/12/01",
  "HireDate": "2009/03/06",
  "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
  "Address": "1120 Old Mill Rd.",
  "StateID": 6
},
{
  "ID": 7,
  "FirstName": "giri",
  "LastName": "bade",
  "Prefix": "Ms.",
  "Position": "Angular",
  "BirthDate": "1968/12/01",
  "HireDate": "2009/03/06",
  "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
  "Address": "1120 Old Mill Rd.",
  "StateID": 7
},
{
  "ID": 8,
  "FirstName": "nilam",
  "LastName": "kothare",
  "Prefix": "Ms.",
  "Position": "Angular",
  "BirthDate": "1968/12/01",
  "HireDate": "2009/03/06",
  "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
  "Address": "1120 Old Mill Rd.",
  "StateID": 8
}
]


let states: State[] = [
  {
  "ID": 1,
  "Name": "pune"
  },
 {
  "ID": 2,
  "Name": "mumbai"
 },
  {
  "ID": 3,
  "Name": "chennai"
},
 {
  "ID": 4,
  "Name": "benglur"
},
 {
  "ID": 5,
  "Name": "london"
},
{
  "ID": 6,
  "Name": "newyork"
},
{
  "ID": 7,
  "Name": "benglure"
},
{
  "ID": 8,
  "Name": "africa"
}
]

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {
  getEmployees() 
  {
    return employees;
  }
  getStates() 
  {
    return states;
  }
  getClient() 
  {
    return client;
  }

  constructor() { }
}
