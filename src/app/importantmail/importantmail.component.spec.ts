import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantmailComponent } from './importantmail.component';

describe('ImportantmailComponent', () => {
  let component: ImportantmailComponent;
  let fixture: ComponentFixture<ImportantmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
