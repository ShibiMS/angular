import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ MailFakeDb } from '../mail';

@Injectable({
  providedIn: 'root'
})
export class AllmailService {

  constructor(private http: HttpClient,
              private mailList: MailFakeDb
              ) { 
                // this.getAllemailData();
                
              }
             
  getAllemailData(){
    return this.mailList.mails;
  }  
  getEmailById(mailid){
    return this.mailList.mails.find(item => item.id === mailid);
  }
  
  getAllImportantemailData(){
     let data = this.mailList.mails.filter((x) =>  x.important === true );
     console.log('datahere',data);
     return data;
  }  
}
