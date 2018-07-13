import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../../models/device.model';
import { ReservationModel } from '../../models/reservation.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class DeviceReservationService {

  readonly METHOD_GET_ALL_RESERVATIONS = 'getAllReservations';
  readonly METHOD_GET_ALL_ACTIVE_RESERVATIONS = 'getAllActiveReservations';

  lookupURL = environment.domain + '/admin/reservation.php';
  // lookupURL = 'http://localhost/PwCiMDMServer/admin/admin.php';

  constructor(private http: HttpClient) { }

  getAllReservations(): Promise<ReservationModel[]> {
    const body = { 'method': this.METHOD_GET_ALL_RESERVATIONS };
    return this.http.post<ReservationModel[]>(this.lookupURL, JSON.stringify(body)).toPromise();
  }

  getAllActiveReservations(): Promise<ReservationModel[]> {
    const body = { 'method': this.METHOD_GET_ALL_ACTIVE_RESERVATIONS };
    return this.http.post<ReservationModel[]>(this.lookupURL, JSON.stringify(body)).toPromise();
  }
}
