import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../../models/device.model';

@Injectable()
export class DeviceRegistrationService {

  readonly METHOD_GET_ALL_DEVICES = 'getAllDevices';
  readonly METHOD_REGISTER_DEVICE = 'registerDevice';

  lookupURL = 'https://pwcimdm-server.000webhostapp.com/admin/admin.php';
  // lookupURL = 'http://localhost/PwCiMDMServer/admin/admin.php';

  constructor(private http: HttpClient) { }

  getAllDevices(): Promise<Device[]> {
    const body = { 'method': this.METHOD_GET_ALL_DEVICES };
    return this.http.post<Device[]>(this.lookupURL, JSON.stringify(body)).toPromise();
  }

  registerDeviceWithSerial(id: number, deviceSerial: string): Promise<Device> {
    const body = { 'method': this.METHOD_REGISTER_DEVICE, 'data': { 'id': id, 'serial': deviceSerial }};
    return this.http.post<Device>(this.lookupURL, JSON.stringify(body)).toPromise();
  }
}
