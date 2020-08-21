import { Component, OnInit } from '@angular/core';
import{PivotServiceService} from  '../pivot-service.service';
import{Sale} from '../pivot-service.service';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { NgModule, ViewChild, AfterViewInit, enableProdMode } from '@angular/core';


import { DxPivotGridModule,DxPivotGridComponent,DxChartModule,DxChartComponent } from 'devextreme-angular';

@Component({
  selector: 'app-pivot-gridcomp',
  templateUrl: './pivot-gridcomp.component.html',
  styleUrls: ['./pivot-gridcomp.component.css']
})
export class PivotGridcompComponent implements  AfterViewInit {
  @ViewChild(DxPivotGridComponent) pivotGridObject: DxPivotGridComponent;
  @ViewChild(DxChartComponent) chart: DxChartComponent;

  pivotGridDataSource: any;


  constructor(service: PivotServiceService) {
    this.customizeTooltip = this.customizeTooltip.bind(this);

    this.pivotGridDataSource = {
      fields: [{
        caption: "Region",
        width: 120,
        dataField: "region",
        area: "row",
        sortBySummaryField: "Total"
      }, 
      {
        caption: "City",
        dataField: "city",
        width: 150,
        area: "row"
      }, 
      {
        dataField: "date",
        dataType: "date",
        area: "column"
      }, 
      {
        groupName: "date",
        groupInterval: "month",
        visible: false
      },
       {
        caption: "Total",
        dataField: "amount",
        dataType: "number",
        summaryType: "sum",
        format: "currency",
        area: "data"
      }],
      store: service.getSales()
    }
  }
  ngAfterViewInit() {
    this.pivotGridObject.instance.bindChart(this.chart.instance, {
      dataFieldsDisplayMode: "splitPanes",
      alternateDataFields: false
    });

    setTimeout(() => {
        var dataSource = this.pivotGridObject.instance.getDataSource();
        dataSource.expandHeaderItem('row', ['North America']);
        dataSource.expandHeaderItem('column', [2013]);
    }, 0);
  }

  customizeTooltip(args) {
    return {
      html: args.seriesName + " | Total<div class='currency'>" + args.valueText + "</div>"
    };
  }
}

  