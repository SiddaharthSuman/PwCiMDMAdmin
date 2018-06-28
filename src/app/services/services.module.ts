import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceRegistrationService } from './device-registration/device-registration.service';
import { UserRegistrationService } from './user-registration/user-registration.service';
import { DeviceReservationService } from './device-reservation/device-reservation.service';
import { ReportService } from './report/report.service';
import { SiteSettingsService } from './site-settings/site-settings.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DeviceRegistrationService,
    UserRegistrationService,
    DeviceReservationService,
    ReportService,
    SiteSettingsService
  ]
})
export class ServicesModule { }
