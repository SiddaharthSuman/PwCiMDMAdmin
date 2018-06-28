import { TestBed, inject } from '@angular/core/testing';

import { SiteSettingsService } from './site-settings.service';

describe('SiteSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteSettingsService]
    });
  });

  it('should be created', inject([SiteSettingsService], (service: SiteSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
