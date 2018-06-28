import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisteredDevicesComponent } from './pages/registered-devices/registered-devices.component';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisteredUsersComponent } from './pages/registered-users/registered-users.component';
import { ReservedDevicesComponent } from './pages/reserved-devices/reserved-devices.component';
import { ActiveReportComponent } from './pages/active-report/active-report.component';
import { SiteSettingsComponent } from './pages/site-settings/site-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteredDevicesComponent,
    PageNotFoundComponent,
    RegisteredUsersComponent,
    ReservedDevicesComponent,
    ActiveReportComponent,
    SiteSettingsComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
