import { NgModule, Component, enableProdMode,OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxButtonModule , DxPopupModule, DxPopoverModule} from 'devextreme-angular';
import { ServiceDemoService, Employee, State } from '../service-demo.service';
import { ThrowStmt } from '@angular/compiler';
import { confirm } from 'devextreme/ui/dialog';
import { empty } from 'rxjs';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
  selector: 'app-dev-ex-demo',
  templateUrl: './dev-ex-demo.component.html',
  styleUrls: ['./dev-ex-demo.component.css']
})
export class DevExDemoComponent implements OnInit {

  dataSource: Employee[];
    states: State[];
    events: Array<string> = [];
    pattern:any=['ms','mrs','mr'];
    customCallback:any;
    

    constructor(service: ServiceDemoService) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
       
        
    }
    action:any;
    row:any;
    allowUpdating:boolean=false;
    allowAdding:boolean=false;
    columnAutoWidth:boolean=false;
    dataField :any[];
    e:any=[];

    logEvent(e){
        debugger;
        console.log("Values Inside row ed",e);
        if('RowInserting'){
            debugger;
             for(let i=0; i<=this.dataSource.length;i++){
             debugger;
                if(e.data.FirstName == this.dataSource[i].FirstName &&  e.data.LastName == this.dataSource[i].LastName && e.data.BirthDate == this.dataSource[i].BirthDate ){
                  e.cancel=true;

                  e.data= confirm("<i>Duplicate  are not allowed?</i>", "Confirm changes");

                  // e.data.then((dialogResult) => {
                  //     alert(dialogResult ? "Confirmed" : "Canceled");
                  // });



                  
                }
               
             } 

        }

       
    }

    functUpadte(eve){
      debugger
      console.log("Values Inside row ed",eve);

      for(let i=0;i<=this.dataSource.length;i++)
      {
        if(eve.newData.FirstName == this.dataSource[i].FirstName){
          eve.newData.FirstName= confirm("<i>Duplicate FirstName are not allowed?</i>", "Confirm changes");
          // eve.newData.FirstName.then((dialogResult) => {
          //     alert(dialogResult ? "Confirmed" : "Canceled");
          

          eve.newData.FirstName=eve.oldData.FirstName;
           eve.cancel=false;
        }

        if(eve.newData.LastName == this.dataSource[i].LastName)
        {

          eve.newData.LastName= confirm("<i>Duplicate LastName are not allowed?</i>", "Confirm changes");
          // eve.newData.LastName.then((dialogResult) => {
          //     alert(dialogResult ? "Confirmed" : "Canceled");
        
          eve.newData.LastName=eve.oldData.LastName;
          eve.cancel=false;
        }

        if(eve.newData.Position == this.dataSource[i].Position)
        {
          eve.newData.Position= confirm("<i>Duplicate Position are not allowed?</i>", "Confirm changes");
          // eve.newData.Position.then((dialogResult) => {
          //     alert(dialogResult ? "Confirmed" : "Canceled");
          // });

          eve.newData.Position=eve.oldData.Position;
          eve.cancel=false;
        }


        if(eve.newData.StateID == this.dataSource[i].StateID){

          eve.newData.StateID= confirm("<i>Duplicate State are not allowed?</i>", "Confirm changes");
          // eve.newData.StateID.then((dialogResult) => {
          //     alert(dialogResult ? "Confirmed" : "Canceled");
          // });
          eve.newData.StateID=eve.oldData.StateID;
          eve.cancel=false;

        }
        if(eve.newData.BirthDate == this.dataSource[i].BirthDate){

          eve.newData.BirthDate= confirm("<i>Duplicate BirthDate are not allowed?</i>", "Confirm changes");
          // eve.newData.BirthDate.then((dialogResult) => {
          //     alert(dialogResult ? "Confirmed" : "Canceled");
          // });
           eve.newData.BirthDate=eve.oldData.BirthDate;
          eve.cancel=false;

        }
        
        


      }

    }


  


    
    
    ngOnInit(){}

}
