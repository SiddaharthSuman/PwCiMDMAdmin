import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../../models/device.model';
import { ReservationModel } from '../../models/reservation.model';
import { ActiveReportModel } from '../../models/active-report.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class ReportService {

  readonly METHOD_GET_ACTIVE_REPORTS = 'getLatestReport';

  lookupURL = environment.domain + '/admin/admin.php';

  constructor(private http: HttpClient) { }

  getActiveReports(): Promise<ActiveReportModel[]> {
    const body = { 'method': this.METHOD_GET_ACTIVE_REPORTS };
    return this.http.post<ActiveReportModel[]>(this.lookupURL, JSON.stringify(body)).toPromise();
  }
}
