import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatTableModule,MatPaginator, MatTableDataSource, MatPaginatorModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllmailModule } from './allmail/allmail.module';
import { HttpClientModule } from '@angular/common/http';
import{ MailFakeDb } from './mail';
//import { SentComponent } from './sent/sent.component';
import { SentModule } from './sent/sent.module';

//import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    //SentComponent,
    //SidenavComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AllmailModule,
    SentModule,
    MatButtonModule, MatCheckboxModule,MatTableModule,MatPaginatorModule,HttpClientModule
  ],
  providers: [MailFakeDb],
  bootstrap: [AppComponent]
})
export class AppModule { }
