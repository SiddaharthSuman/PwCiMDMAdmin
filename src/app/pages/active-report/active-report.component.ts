import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import { ActiveReportModel } from '../../models/active-report.model';

@Component({
  selector: 'app-active-report',
  templateUrl: './active-report.component.html',
  styleUrls: ['./active-report.component.css']
})
export class ActiveReportComponent implements OnInit {
  reports: ActiveReportModel[];

  constructor(private service: ReportService) { }

  ngOnInit() {
    this.service.getActiveReports().then(response => {
      console.log(response);
      this.reports = response;
    });
  }

}
