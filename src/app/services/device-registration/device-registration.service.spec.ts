import { TestBed, inject } from '@angular/core/testing';

import { DeviceRegistrationService } from './device-registration.service';

describe('DeviceRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceRegistrationService]
    });
  });

  it('should be created', inject([DeviceRegistrationService], (service: DeviceRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
