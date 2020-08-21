import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import{LazyOneModuleModule} from '../LazyExample/lazy-one-module.module';
import {RouterModule,Routes} from '@angular/router';

const routes: Routes = [
  {
    path:"lazyOne",
    loadChildren:'../LazyExample/lazy-one-module.module#LazyOneModuleModule'
  }

  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]

})
export class LazyAppRoutingModule { }

