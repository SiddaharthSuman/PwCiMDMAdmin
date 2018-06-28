import { Component, OnInit } from '@angular/core';
import { SiteSettingsService } from '../../services/site-settings/site-settings.service';
import { SiteSettingsModel } from '../../models/site-settings.model';

@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.css']
})
export class SiteSettingsComponent implements OnInit {
  settings: SiteSettingsModel;
  saving: boolean;

  constructor(private service: SiteSettingsService) { }

  ngOnInit() {
    this.service.getSiteSettings().then(response => {
      this.settings = response;
    });
  }

  saveSettings(interval: string, shutdown: boolean) {
    this.saving = true;
    const match = interval.match(/\D/);
    const intervalNum = parseInt(interval, 10);
    if (match === null && intervalNum !== NaN) {
      const settings: SiteSettingsModel = new SiteSettingsModel();
      settings.timeout = parseInt(interval, 10);
      settings.shutdown = shutdown;
      this.service.saveSiteSettings(settings).then(response => {
        this.saving = false;
        if (response === 'success') {
          console.log('Saved Successfully!');
        } else {
          console.log('Unexpected error while saving!', response);
        }
      });
    }
  }

}
