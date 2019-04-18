import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatPaginatorModule, MatButton, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSortModule, MatRippleModule, MatCardModule, MatExpansionModule, MatDialogModule, MatToolbarModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {AllmailComponent} from './allmail.component';
import {SidenavComponent} from '../sidenav/sidenav.component';
import { RouterModule,Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AllmailService } from './allmail.service';
import { HttpClientModule } from '@angular/common/http';
import { TrimcontentPipe } from './trimcontent.pipe';
import { ShowmailComponent } from '../showmail/showmail.component';
import { ComposemailComponent } from '../popups/composemail/composemail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SentComponent } from '../sent/sent.component';
import { ImportantmailComponent } from '../importantmail/importantmail.component';

const routes = [
  {
      path     : '',
      component: AllmailComponent
  },
  {
    path     : 'allmail',
    component: AllmailComponent
  },
  {
    path     : 'send',
    component: SentComponent
  },
  {
    path     : 'important',
    component: ImportantmailComponent
  }
];
@NgModule({
  declarations: [
    AllmailComponent,
    SidenavComponent,
    ShowmailComponent,
    SentComponent,
    ImportantmailComponent,
    TrimcontentPipe,
    ComposemailComponent,
    ImportantmailComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,  
    MatPaginatorModule, 
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSortModule,
    HttpClientModule,
    MatRippleModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule   
  ],
  entryComponents:[
    ComposemailComponent
  ],
  providers: [AllmailService]
})
export class AllmailModule { }
