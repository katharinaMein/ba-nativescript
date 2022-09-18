import { Component } from '@angular/core';
import { LocalNotifications } from '@nativescript/local-notifications';
import {BackHomeService} from "~/app/backHome.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notificationSentInfo: false;

  constructor(public bhS: BackHomeService) {}

  ngOnInit(): void {
  }

  onSendNotification(notificationInput: string){
    LocalNotifications.hasPermission().then( function(){
      LocalNotifications.schedule([
        {
          title: 'Ckeck Mobile Notification',
          body: notificationInput,
          at: new Date(new Date().getTime() + 2000), // nach 2s
        },
      ]).then(
        (scheduledIds) => {
          console.log('Notification id(s) scheduled: ' + JSON.stringify(scheduledIds));
          this.notificationSentInfo = true;
        },
        (error) => {
          alert('scheduling error: ' + error);
        }
      );
    }.bind(this));
  }
}
