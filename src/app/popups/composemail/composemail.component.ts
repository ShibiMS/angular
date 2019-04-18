import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-composemail',
  templateUrl: './composemail.component.html',
  styleUrls: ['./composemail.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ComposemailComponent implements OnInit {
  fromemail = new FormControl('johndoe@creapond.com');
  constructor() { }

  ngOnInit() {
  }

}
