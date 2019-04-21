import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllmailComponent } from './allmail/allmail.component';
import { SentComponent } from './sent/sent.component';
import { ImportantmailComponent } from './importantmail/importantmail.component';

//const routes: Routes = [];
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
