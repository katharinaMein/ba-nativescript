import { Component } from '@angular/core';
import { Contacts } from '@nativescript/contacts';
import {requestPermissions} from "nativescript-permissions";
import {BackHomeService} from "~/app/backHome.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contact: any;

  constructor(public bhS: BackHomeService) {}

  ngOnInit(): void {

  }

  onGetContact(){
    requestPermissions([android.Manifest.permission.GET_ACCOUNTS, android.Manifest.permission.READ_CONTACTS], "I need these permissions").then(() => {
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
