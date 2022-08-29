import { Component } from '@angular/core';
import { Vibrate } from 'nativescript-vibrate';
import {BackHomeService} from "~/app/backHome.service";

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html',
  styleUrls: ['./vibration.component.css']
})
export class VibrationComponent {
  vibrator = new Vibrate();


  constructor(public bhS: BackHomeService) {}

  ngOnInit(): void {
  }

  onVibrate(){
    this.vibrator.vibrate(200);
  }
}
