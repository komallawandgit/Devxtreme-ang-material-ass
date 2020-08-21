import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTable,MatDialog,MatMenuTrigger,TooltipPosition} from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import {FormControl} from '@angular/forms';



export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];
@Component({
  selector: 'app-ang-material-table-crud',
  templateUrl: './ang-material-table-crud.component.html',
  styleUrls: ['./ang-material-table-crud.component.css']
})
export class AngMaterialTableCrudComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = ELEMENT_DATA;
  static:boolean;
 
 
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(public dialog: MatDialog) {}

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  someMethod() {
    this.trigger.openMenu();
  }
ngOnInit() {}
 
//   constructor(public dialog: MatDialog) {}
//   ngOnInit() {
//   }
 
//   openDialog(action,obj) {
//     obj.action = action;
//     const dialogRef = this.dialog.open(DialogBoxComponent, {
//       width: '250px',
//       data:obj
//     });
//   }

//   dialogRef.afterClosed().subscribe(result => {
//     if(result.event == 'Add'){
//       this.addRowData(result.data);
//     }else if(result.event == 'Update'){
//       this.updateRowData(result.data);
//     }else if(result.event == 'Delete'){
//       this.deleteRowData(result.data);
//     }
//   });
// }

// addRowData(row_obj){
//   var d = new Date();
//   this.dataSource.push({
//     id:d.getTime(),
//     name:row_obj.name
//   });
//   this.table.renderRows();
  
// }
// updateRowData(row_obj){
//   this.dataSource = this.dataSource.filter((value,key)=>{
//     if(value.id == row_obj.id){
//       value.name = row_obj.name;
//     }
//     return true;
//   });
// }
// deleteRowData(row_obj){
//   this.dataSource = this.dataSource.filter((value,key)=>{
//     return value.id != row_obj.id;
//   });
// }
 



}
