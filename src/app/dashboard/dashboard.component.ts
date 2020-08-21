import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {VERSION} from '@angular/material';
import {NavItem} from '../nav-item';
import {NavserviceService} from '../navservice.service';
import { MatSidenav } from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class DashboardComponent implements OnInit {
//    @ViewChild('appDrawer') appDrawer: ElementRef;
//    version = VERSION;
//    navItems: NavItem[] = [
//     {
//       displayName: 'Dashboard',
//       iconName: '',
//       route: './DashBoard',
//     children: [
//       {
//          displayName: 'Dynamic Angular Element Demo',
//           iconName: 'group',
//           route: '/dynamicElement',
//         },
//         {
//            displayName: 'Lazy Loading',
//                    iconName: 'group',
//          route: '/lazyOne',
//       },
//         {
//          displayName: 'Child To Parent Data Sharing',
//          iconName: 'group',
//           route: '/childtoparent',
//          }
//        ]
//      }
//     ]
//   constructor(private navService: NavserviceService) {
//   }
//    ngOnInit(){}

//  ngAfterViewInit() {
//     this.navService.appDrawer = this.appDrawer;
//   // }

  @ViewChild('sidenav') sidenav: MatSidenav;
 isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
showSubSubMenu: boolean = false;
showSubSubsubMenu:boolean = false;

   mouseenter() {
   if (!this.isExpanded) {
      this.isShowing = true;
      this.sidenav.open();
     }
   }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
      this.showSubmenu= false;
      this.showSubSubMenu= false;
      this.showSubSubsubMenu= false;
      this.sidenav.close();
    
     }
   }
   hideDashbord(){
    //  if(!this.isExpanded)
    // {
    //   this.isShowing=false;
    //   this.sidenav.close();
    // }
    // if (this.isExpanded) {
    //   this.isShowing = true;
    //   this.sidenav.open();
    //  }


   }
  constructor(public router:Router){

 }
ngOnInit(){


}
logout(){
this.router.navigate(["./login"],{ replaceUrl: true });

 }
}

