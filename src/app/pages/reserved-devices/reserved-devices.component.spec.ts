import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedDevicesComponent } from './reserved-devices.component';

describe('ReservedDevicesComponent', () => {
  let component: ReservedDevicesComponent;
  let fixture: ComponentFixture<ReservedDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
