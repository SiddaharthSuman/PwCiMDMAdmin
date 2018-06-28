import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegisteredDevicesComponent } from './pages/registered-devices/registered-devices.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisteredUsersComponent } from './pages/registered-users/registered-users.component';
import { ReservedDevicesComponent } from './pages/reserved-devices/reserved-devices.component';
import { ActiveReportComponent } from './pages/active-report/active-report.component';
import { SiteSettingsComponent } from './pages/site-settings/site-settings.component';


export const routes: Routes = [
  { path: 'RegisteredDevices', component: RegisteredDevicesComponent },
  { path: 'RegisteredUsers', component: RegisteredUsersComponent },
  { path: 'ReservedDevices', component: ReservedDevicesComponent },
  { path: 'ActiveReports', component: ActiveReportComponent },
  { path: 'SiteSettings', component: SiteSettingsComponent },
  { path: '', redirectTo: '/RegisteredDevices', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: []
})
export class AppRoutingModule {

}
