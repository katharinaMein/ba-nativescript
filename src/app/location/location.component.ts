import {Component} from '@angular/core';
import * as geolocation from '@nativescript/geolocation';
import {CoreTypes} from '@nativescript/core';
import Accuracy = CoreTypes.Accuracy;


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  latitude: any;
  longitude: any;
  accuracy: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onGetLocation() {
    geolocation.enableLocationRequest()
      .then(async function () {
        const location = await geolocation.getCurrentLocation({
          desiredAccuracy: Accuracy.high,
          maximumAge: 5000,
          timeout: 5000
        });
        this.latitude = location.latitude;
        this.longitude = location.longitude;
        this.accuracy = location.horizontalAccuracy;

      }.bind(this)), function (e) {
      alert('Location Request failed, Error: ' + e.message);
    };
  }
}
