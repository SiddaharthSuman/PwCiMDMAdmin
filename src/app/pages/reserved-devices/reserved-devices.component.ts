import { Component, OnInit } from '@angular/core';
import { DeviceReservationService } from '../../services/device-reservation/device-reservation.service';
import { ReservationModel } from '../../models/reservation.model';

@Component({
  selector: 'app-reserved-devices',
  templateUrl: './reserved-devices.component.html',
  styleUrls: ['./reserved-devices.component.css']
})
export class ReservedDevicesComponent implements OnInit {
  reservations: ReservationModel[];

  constructor(private service: DeviceReservationService) { }

  ngOnInit() {
    this.service.getAllReservations().then(response => {
      this.reservations = response;
    });
  }

}
