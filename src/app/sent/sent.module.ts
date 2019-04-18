import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentComponent } from './sent.component';
//import { SidenavComponent } from '../sidenav/sidenav.component';
import { ShowmailComponent } from '../showmail/showmail.component';
import { RouterModule } from '@angular/router';
//import { SidenavModule } from '../sidenav/sidenav.module';
//import { AllmailModule } from '../allmail/allmail.module';

// const routes = [
//   {
//       path     : 'send',
//       component: SentComponent
//   }  
// ];

@NgModule({
  declarations: [
    //SentComponent,
   // SidenavComponent,
   // ShowmailComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
    //AllmailModule,
    //SidenavModule
  ]
})
export class SentModule { }
