import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material';
import { MatSort} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup} from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-ang-material-crud',
  templateUrl: './ang-material-crud.component.html',
  styleUrls: ['./ang-material-crud.component.css']
})
export class AngMaterialCRUDComponent implements OnInit {
  
  info=Info;
  index:any;
  displayedColumns = ['id','Fname','Lname','city','State','edit','delete'];
  dataSource = new MatTableDataSource<Info>(info);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  public infoForm: FormGroup;
  model = new Info();
  editId:number;
  
 
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  ngOnInit() {

    
    this.infoForm = new FormGroup({
      id : new FormControl('', [Validators.required]),
      Fname : new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(200)]),
      Lname: new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(200)]),
      city:new FormControl('', [Validators.required,Validators.minLength(3), Validators.maxLength(200)]),
      State:new FormControl('', [Validators.required,Validators.maxLength(200)]),
    });

  }
  public checkError = (controlName: string, errorName: string) => {
    return this.infoForm.controls[controlName].hasError(errorName);
  }

  onSubmit(){
      info.push(this.infoForm.value);
      this.dataSource=new MatTableDataSource(info); 
      console.log(info);
      this.model=new Info(); 
    }

deletedetail(model){
const index=info.indexOf(model);
  info.splice(index,1);
  this.dataSource=new MatTableDataSource(info);
  }


  editdetail(id:number){
    debugger;
  this.editId= id;
  this.model=info.find(item => item.id == id);
  }

 

  update(id:number){
     debugger;
    console.log(id,this.model.Fname,this.model.Lname,this.model.city,this.model.State);
    console.log(this.infoForm.value);
 
    // let data= this.dataSource.data.find(item => item.id == id);
    // data = this.infoForm.value;
    // this.dataSource=new MatTableDataSource(this.infoForm.value);
    this.dataSource=new MatTableDataSource(info); 
    let data= this.dataSource.data.find(item => item.id == id);
     data = this.infoForm.value;
  this.model=new Info(); 
  this.editId = 0;

 
  
      // console.log(id);
      // this.model.id=this.model.id;
      // this.model.Fname=this.model.Fnam
    
    // this.editId=this.infoForm.value;
    // this.dataSource.data.find= this.infoForm.value;
        // for(let i=0; i<info.length;i++){
        //   if(this.info[i].id==this.id)
        //   {
        //     debugger;
        //     // this.info[i].id= this.model[i].id;
        //     // console.log(this.info[i].id);
        //     this.dataSource= this.infoForm.value
        //   }
        // }
        


   }
}

export class Info {
  id: number;
  Fname:string;
  Lname:string;
  city:string;
  State:string;
}

let info: Info[] =  [
  {
  "id": 10248,
  "Fname":"arya",
  "Lname":"nimbore",
  "city":"pune",
  "State":"maharastra"
},
{
  "id": 1023,
  "Fname":"nilu",
  "Lname":"nalinde",
  "city":"mumbai",
  "State":"maharastra"
},
{
  "id": 1024,
  "Fname":"neha",
  "Lname":"ovhal",
  "city":"pune",
  "State":"maharastra"
}
]


