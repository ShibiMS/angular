import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit,Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { AllmailService } from './allmail.service';
@Component({
  selector: 'app-allmail',
  templateUrl: './allmail.component.html',
  styleUrls: ['./allmail.component.scss']
})

export class AllmailComponent implements OnInit {
  displayedColumns: string[] = ['name', 'subject', 'message', 'time'];
  //displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  data:any[]=[];
  mailId:any;
  maildatabyId:any;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output()
  mailClick: EventEmitter<String> = new EventEmitter<String>(); //creating an output event

  constructor(
    private http: HttpClient,
    private _allmailService: AllmailService
  ) { }
  
  ngOnInit() {
    // alert('123');
    console.log("AllMail",this._allmailService.getAllemailData());
    this.data = this._allmailService.getAllemailData();
    this.isLoadingResults = false
    this.resultsLength = this.data.length;
  }

  showMailbyID(mailid){
   let mailbyId = this._allmailService.getEmailById(mailid);
   this.maildatabyId=mailbyId;

  }

}