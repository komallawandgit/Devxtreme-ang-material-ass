import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import{ FormsModule,NgForm} from '@angular/forms'
import{createCustomElement} from '@angular/elements';
import {AppComponent} from './app.component';
import { TestFieldComponent } from './RegistartionClient/test-field/test-field.component';
import { ChcekboxComponent } from './RegistartionClient/chcekbox/chcekbox.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import{LazyAppRoutingModule} from '../app/lazy-app-routing/lazy-app-routing.module';
import { ChildCompComponent } from './DataSharingChildParent/child-comp/child-comp.component';
import { ParentCompComponent } from './DataSharingChildParent/parent-comp/parent-comp.component';

import {RouterModule} from '@angular/router';
import { SimpleComponent } from './ChangeDetection/parent/simple/simple.component';
import { SimpleChildComponent } from './ChangeDetection/child/simple-child/simple-child.component';
import { ButtonCdChComponent } from './ChangeDetection/child/button-cd-ch/button-cd-ch.component';
import { ButtonCDPareComponent } from './ChangeDetection/parent/button-cdpare/button-cdpare.component';
import { ListNumberParentComponent } from './ChangeDetection/parent/list-number-parent/list-number-parent.component';
import { ListNumberChildComponent } from './ChangeDetection/child/list-number-child/list-number-child.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule,DxBulletModule,DxTemplateModule, DxPopupModule, DxPopoverModule } from 'devextreme-angular';
import { DevExApplicationCompComponent } from './devextrme/dev-ex-application-comp/dev-ex-application-comp.component';
import { DevExDemoComponent } from './devextrme/dev-ex-demo/dev-ex-demo.component';
import { DxValidationSummaryModule} from 'devextreme-angular';
import { DummyDataGridComponent } from './DataGrid/dummy-data-grid/dummy-data-grid.component';
import Component from 'devextreme/core/component';
import { PivotGridcompComponent } from './PivotGridDx/pivot-gridcomp/pivot-gridcomp.component';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { DxPivotGridModule,DxPivotGridComponent,DxChartModule,DxChartComponent } from 'devextreme-angular';
import { DevgrpsummComponent } from './DevXtremeGroupSummary/devgrpsumm/devgrpsumm.component';
import { DynamicelementComponent } from './dynamicelement/dynamicelement.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormValidationComponent } from './Form/form-validation/form-validation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import{
  MatAutocompleteModule,
  MatFormFieldControl,
  MatTable,MatDialog,MatMenuTrigger,TooltipPosition,

  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule } from '@angular/material';


import { TopnavComponent } from './topnav/topnav.component';
import { NavMenuItemlistComponent } from './nav-menu-itemlist/nav-menu-itemlist.component';
import { MatTableComponent } from './AngularMateriel/mat-table/mat-table.component';
import { AngMaterialFormComponent } from './AngularMateriel/ang-material-form/ang-material-form.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AngMaterialValidationComponent } from './AngularMateriel/ang-material-validation/ang-material-validation.component';
import { AngMaterialCRUDComponent } from './AngularMateriel/ang-material-crud/ang-material-crud.component';
import { AngMaterialTableCrudComponent } from './AngularMateriel/ang-material-table-crud/ang-material-table-crud.component';
import { DialogBoxComponent } from './AngularMateriel/dialog-box/dialog-box.component';



@NgModule({
  declarations: [
    AppComponent,
    TestFieldComponent,
    ChcekboxComponent,
    ChildCompComponent,
    ParentCompComponent,
    SimpleComponent,
    SimpleChildComponent,
    ButtonCdChComponent,
    ButtonCDPareComponent,

    ListNumberParentComponent,
    ListNumberChildComponent,
    DevExApplicationCompComponent,
    DevExDemoComponent,
    DummyDataGridComponent,
    PivotGridcompComponent,
    DevgrpsummComponent,
    DynamicelementComponent,
    LoginComponent,
    DashboardComponent,
    FormValidationComponent,
    TopnavComponent,
    NavMenuItemlistComponent,
    MatTableComponent,
    AngMaterialFormComponent,
    AngMaterialValidationComponent,
    AngMaterialCRUDComponent,
    AngMaterialTableCrudComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DxPopupModule, DxPopoverModule,
    DxButtonModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    BrowserModule,
    DxDataGridModule,
    DxButtonModule,
    DxValidationSummaryModule,
    FormsModule, ReactiveFormsModule,

    DxPivotGridModule,
    DxChartModule,

    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTable,MatDialog,MatMenuTrigger,
    MatFormFieldModule,
      MatAutocompleteModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDatepickerModule,
      MatDialogModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
    
    



   

    HttpClientModule,
    LazyAppRoutingModule,
    RouterModule.forRoot(
      [
        // {
        //   path:'login',
        //   component:LoginComponent
        // },
        {
          path: 'login', component: LoginComponent, data: {title: 'DynamicelementComponent'},
          //  children: [
          //    {path: '', component: LoginComponent}
          //  ]
        },
        { path: 'DashBoard', component: DashboardComponent,
          children: [
            { path: '', redirectTo: 'dynamicElement', pathMatch: 'full' },
             { path:'dynamicElement', component: DynamicelementComponent },
             {
              path:"lazyOne",
              loadChildren:'./LazyExample/lazy-one-module.module#LazyOneModuleModule'
            },
            { path:'childtoparent', component: ParentCompComponent },
            { path:'simpleCD',component:SimpleComponent},
            { path:'ButtonCD',component:ButtonCDPareComponent},
            {path:'ListNumberCdOb', component:ListNumberParentComponent},
            {path:'formValidation',component:FormValidationComponent},
            {path:'DevExtrem',component:DevExApplicationCompComponent},
            { path:'DevDataGrid',component:DummyDataGridComponent},
            {path:'pivotGrid',component:PivotGridcompComponent },
            {path:'DevxtremeSummary',component:DevgrpsummComponent},
            {path:'MatTable' ,component:MatTableComponent},
            {path:'AngMatForm',component:AngMaterialFormComponent},
            {path:'angMatValidation',component:AngMaterialValidationComponent},
            {path:'AngMatCrUD',component:AngMaterialCRUDComponent},
            {path:'AngMaterialTableCrudComponent',component:AngMaterialTableCrudComponent}
           
          ]
        }

      //  {
      //     path:'DashBoard',
      //     component:DashboardComponent
      //   },
      //   {
      //     path:'dynamicElement',
      //     component:DynamicelementComponent
          
      //   },
      //   {
      //   path:'childtoparent',
      //   component:ParentCompComponent
      //  },
      //  {
      //    path:'simpleCD',
      //    component:SimpleComponent
      //  },
      //  {
      //    path:'ButtonCD',
      //    component:ButtonCDPareComponent
      //  },
      //  {
      //    path:'ListNumberCdOb',
      //    component:ListNumberParentComponent
      //  },{
      //    path:'formValidation',
      //    component:FormValidationComponent
      //  },
      //  {
      //    path:'DevExtrem',
      //    component:DevExApplicationCompComponent
      //  },
      //  {
      //    path:'DevDataGrid',
      //    component:DummyDataGridComponent
      //  },
      //  {
      //   path:'pivotGrid',
      //   component:PivotGridcompComponent
      //  },
      //  {
      //    path:'DevxtremeSummary',
      //    component:DevgrpsummComponent
      //  }
    ]
    ),
    BrowserAnimationsModule
],
  providers: [],
  entryComponents:[TestFieldComponent,ChcekboxComponent,DialogBoxComponent],
 
  bootstrap:[AppComponent]
  
  
 
})
export class AppModule {

  
 }
