import { Component, OnInit } from '@angular/core';
import { DeviceRegistrationService } from '../../services/device-registration/device-registration.service';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-registered-devices',
  templateUrl: './registered-devices.component.html',
  styleUrls: ['./registered-devices.component.css']
})
export class RegisteredDevicesComponent implements OnInit {

  devices: Device[];
  registering = false;

  constructor(private deviceRegistrationService: DeviceRegistrationService) { }

  ngOnInit() {
    this.deviceRegistrationService.getAllDevices().then(
      allDevices => {
        this.devices = allDevices;
        console.log(this.devices);
      },
      error => console.log(error)
    );
  }

  showExtraData(index: number) {
    const element: any = document.getElementById(`collapseRow${index}`);
    if (element.classList.contains('show')) {
      // Hide
      element.classList.remove('show');
    } else {
      // Show element
      element.classList.add('show');
    }
  }

  registerDevice(index: number, deviceSerial: string) {
    this.registering = true;
    const device: Device = this.devices[index];
    device.deviceSerial = deviceSerial;
    let updatedDevice: Device;
    this.deviceRegistrationService.registerDeviceWithSerial(device.id, device.deviceSerial).then(data => {
      console.log(data);
      updatedDevice = data;
      this.devices.splice(index, 1, updatedDevice);
      this.registering = false;
    });
  }
}
