import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl,FormBuilder, Validators,ValidationErrors, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-composemail',
  templateUrl: './composemail.component.html',
  styleUrls: ['./composemail.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ComposemailComponent implements OnInit {
  mailcomposeForm: FormGroup;
  constructor(private fb:FormBuilder) { }

   ngOnInit() {
    this.mailcomposeForm = this.fb.group({
      fromemail: ['johndoe@creapond.com'],
      toemail:['', [Validators.required, Validators.email]],
      subject:['', Validators.required],
      message:['', Validators.required]
    })
  }

  get f() { return this.mailcomposeForm.controls; }
  submitComposeMail(){
    console.log('submitComposeMail',JSON.stringify(this.mailcomposeForm.value));
  }
}
