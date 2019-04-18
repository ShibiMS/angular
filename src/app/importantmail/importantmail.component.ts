import { Component, OnInit, Input } from '@angular/core';
import { AllmailService } from '../allmail/allmail.service';
@Component({
  selector: 'app-importantmail',
  templateUrl: './importantmail.component.html',
  styleUrls: ['./importantmail.component.scss']
})

export class ImportantmailComponent implements OnInit {
  data:any[]=[];
  maildatabyId:any;
  constructor(private _allmailservice : AllmailService) { }

  ngOnInit() {
    this.data = this._allmailservice.getAllImportantemailData();
    console.log('important',this.data );
  }
  showMailbyID(mailid){
    let mailbyId = this._allmailservice.getEmailById(mailid);
    this.maildatabyId=mailbyId;
 
   }
}
