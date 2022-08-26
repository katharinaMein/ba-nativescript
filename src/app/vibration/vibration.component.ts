import { Component } from '@angular/core';
import { Vibrate } from 'nativescript-vibrate';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.component.html',
  styleUrls: ['./vibration.component.css']
})
export class VibrationComponent {
  vibrator = new Vibrate();


  constructor() {}

  ngOnInit(): void {
  }

  onVibrate(){
    this.vibrator.vibrate(200);
  }
}
