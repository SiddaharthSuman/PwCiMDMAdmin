import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import { ActiveReportModel } from '../../models/active-report.model';
import { ReservationModel } from '../../models/reservation.model';
import { DeviceReservationService } from '../../services/device-reservation/device-reservation.service';

@Component({
  selector: 'app-active-report',
  templateUrl: './active-report.component.html',
  styleUrls: ['./active-report.component.css']
})
export class ActiveReportComponent implements OnInit {
  reports: ActiveReportModel[];
  reservations: ReservationModel[];

  constructor(private reportService: ReportService, private reservationService: DeviceReservationService) { }

  ngOnInit() {
    this.reservationService.getAllActiveReservations().then(response => this.reservations = response);
    this.reportService.getActiveReports().then(response => {
      console.log(response);
      this.reports = response;
    });
  }

  checkActiveReservationsForDevice(deviceid: number) {
    return this.reservations && this.reservations.some(reservation => reservation.device === deviceid);
  }

}
