import { Component, OnInit, Input,OnChanges, SimpleChanges, SimpleChange,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-showmail',
  templateUrl: './showmail.component.html',
  styleUrls: ['./showmail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowmailComponent implements OnChanges {
  panelOpenState = false;
  @Input()
  childmailId;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
 
    for (let property in changes) {
        if (property === 'childmailId') {
          console.log('Previous:', changes[property].previousValue);
          console.log('Current:', changes[property].currentValue);
          console.log('firstChange:', changes[property].firstChange);
        } 
    }
}

mailClickData(event){
  console.log('Mail here',event);
}

mailClick(data){
  console.log('Mail here',data);
}

}
