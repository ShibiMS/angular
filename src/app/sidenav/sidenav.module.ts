import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {SidenavComponent} from './sidenav.component';
@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule 
  ]
})
export class SidenavModule { }
