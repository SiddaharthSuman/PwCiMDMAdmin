import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../../models/device.model';
import { ReservationModel } from '../../models/reservation.model';

@Injectable()
export class DeviceReservationService {

  readonly METHOD_GET_ALL_RESERVATIONS = 'getAllReservations';

  lookupURL = 'https://pwcimdm-server.000webhostapp.com/admin/reservation.php';
  // lookupURL = 'http://localhost/PwCiMDMServer/admin/admin.php';

  constructor(private http: HttpClient) { }

  getAllReservations(): Promise<ReservationModel[]> {
    const body = { 'method': this.METHOD_GET_ALL_RESERVATIONS };
    return this.http.post<ReservationModel[]>(this.lookupURL, JSON.stringify(body)).toPromise();
  }
}
