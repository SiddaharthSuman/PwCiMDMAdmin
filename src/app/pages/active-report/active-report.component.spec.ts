import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveReportComponent } from './active-report.component';

describe('ActiveReportComponent', () => {
  let component: ActiveReportComponent;
  let fixture: ComponentFixture<ActiveReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
