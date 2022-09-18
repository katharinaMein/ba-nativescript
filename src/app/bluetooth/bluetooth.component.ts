import { Component } from '@angular/core';
import { Bluetooth } from '@nativescript-community/ble';
import {BackHomeService} from "~/app/backHome.service";

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.css']
})
export class BluetoothComponent {
  bluetooth = new Bluetooth();
  deviceUUIDArray: Array<string> = [];
  scanning: boolean = false;


  constructor(public bhS: BackHomeService) {}

  ngOnInit(): void {
    this.bluetooth.requestLocationPermission().then(val => console.log(JSON.stringify(val)));
  }

  onClickConnectButton(){
    this.bluetooth.isBluetoothEnabled().then(
      async function(enabled) {
        if(enabled === false){
          if (!await this.enableBluetooth()) {
            return;
          }
        }
        this.onSearchDevices();
      }.bind(this)
    );
  }

  enableBluetooth(): Promise<boolean>{
    return this.bluetooth.enable();
  }

  onSearchDevices(){
    this.scanning = true;
    this.bluetooth.startScanning({
      seconds: 4,
      onDiscovered: function (peripheral) {
        this.deviceUUIDArray.push(peripheral.UUID);
      //  this.onConnect(peripheral);
      }.bind(this)
    }).then(function() {
      this.scanning = false;
    }.bind(this),
      function (err) {
      alert("error while scanning: " + err);
    });
  }

  onConnect(peripheral){
    this.bluetooth.connect({
      UUID: peripheral.UUID,
      onConnected: function (peripheral) {
        this.onRead(peripheral);
      }.bind(this),
    }).then(val => this.onRead(val));
  }

  onRead(peripheral){
    this.bluetooth.read({
      peripheralUUID: peripheral.UUID,
      serviceUUID: '0000180f-0000-1000-8000-00805f9b34fb',
      characteristicUUID: "00002a19-0000-1000-8000-00805f9b34fb"
    }).then(function(result) {
        // show result
    }, function (err) {
      alert("read error: " + err);
    });
  }
}


