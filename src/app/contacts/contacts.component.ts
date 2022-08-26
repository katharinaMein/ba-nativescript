import { Component } from '@angular/core';
import { Contacts } from '@nativescript/contacts';
import {requestPermissions} from "nativescript-permissions";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contact: any;

  constructor() {}

  ngOnInit(): void {

  }

  onGetContact(){
    requestPermissions([android.Manifest.permission.GET_ACCOUNTS, android.Manifest.permission.READ_CONTACTS], "I need these permissions because I'm cool").then(() => {
      Contacts.getContact().then(function (args) {
          if (args.response === 'selected') {
            this.contact = args.data;
          } else{
            alert('kein Kontakt ausgewählt')
          }
        }.bind(this),
        reason => alert(reason),
      );
    });
  }
}
