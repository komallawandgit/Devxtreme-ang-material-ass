import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyOneComponent} from './lazy-one.component';
import {RouterModule,Routes} from '@angular/router';
const routes:Routes=[
{
  path:"", 
  component: LazyOneComponent
}


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[LazyOneComponent]
  
})
export class LazyOneModuleModule {

 }
