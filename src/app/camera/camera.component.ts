import { Component } from '@angular/core';
import { requestPermissions } from '@nativescript/camera';
import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";
import {BackHomeService} from "~/app/backHome.service";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
  image = new Image();

  constructor(public bhS: BackHomeService) {}

  ngOnInit(): void {
  }

  onTakePicture() {
    requestPermissions().then(
      function success() {
        // permission request accepted or already granted
        camera.takePicture()
          .then((imageAsset) => {
            console.log("Result is an image asset instance");

            this.image.src = imageAsset;
          }).catch((err) => {
          console.log("Error -> " + err.message);
        });
      }.bind(this),
      function failure() {
        // permission request rejected
        alert("Nicht berechtigt, auf Kamera zuzugreifen.")
      }
    );
  }
}
