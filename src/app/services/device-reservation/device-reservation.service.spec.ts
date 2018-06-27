import { TestBed, inject } from '@angular/core/testing';

import { DeviceReservationService } from './device-reservation.service';

describe('DeviceReservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceReservationService]
    });
  });

  it('should be created', inject([DeviceReservationService], (service: DeviceReservationService) => {
    expect(service).toBeTruthy();
  }));
});
