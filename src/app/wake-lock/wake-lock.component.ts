import { Component, OnInit} from '@angular/core';
import { keepAwake, allowSleepAgain } from "nativescript-insomnia";
import {BackHomeService} from "~/app/backHome.service";

@Component({
  selector: 'app-wake-lock',
  templateUrl: './wake-lock.component.html',
  styleUrls: ['./wake-lock.component.css']
})
export class WakeLockComponent implements OnInit{
  insomnia = false;

  constructor(public bhS: BackHomeService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.onDeactivateInsomnia();
  }

  onToggleWakeLock(){
    if(!this.insomnia){
      this.onActivateInsomnia();
    }else{
      this.onDeactivateInsomnia();
    }
  }

  onActivateInsomnia(){
    keepAwake().then(function() {
      this.insomnia = true;
    }.bind(this))
  }

  onDeactivateInsomnia(){
    allowSleepAgain().then(function() {
      this.insomnia = false;
    }.bind(this))
  }
}
