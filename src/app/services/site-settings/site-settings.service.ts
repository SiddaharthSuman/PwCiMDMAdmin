import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../../models/device.model';
import { ReservationModel } from '../../models/reservation.model';
import { SiteSettingsModel } from '../../models/site-settings.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class SiteSettingsService {

  readonly METHOD_GET_SITE_SETTINGS = 'getSiteSettings';
  readonly METHOD_SAVE_SITE_SETTINGS = 'saveSiteSettings';

  lookupURL = environment.domain + '/admin/admin.php';

  constructor(private http: HttpClient) { }

  getSiteSettings(): Promise<SiteSettingsModel> {
    const body = { 'method': this.METHOD_GET_SITE_SETTINGS };
    return this.http.post<SiteSettingsModel>(this.lookupURL, JSON.stringify(body)).toPromise();
  }

  saveSiteSettings(settings: SiteSettingsModel): Promise<string> {
    const body = { 'method': this.METHOD_SAVE_SITE_SETTINGS, 'data': settings };
    return this.http.post(this.lookupURL, JSON.stringify(body), { responseType: 'text' }).toPromise();
  }
}
