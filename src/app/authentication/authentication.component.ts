import { Component } from '@angular/core';
import { FingerprintAuth, BiometricIDAvailableResult } from "@nativescript/fingerprint-auth";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  private fingerprintAuth: FingerprintAuth;
  authenticationSuccess: boolean;
  authenticationAvailable: boolean;

  constructor() {
    this.fingerprintAuth = new FingerprintAuth();
  }

  ngOnInit(): void {
    this.fingerprintAuth.available().then((result: BiometricIDAvailableResult) => {
      this.authenticationAvailable = true;
    });
  }

  onAuthenticate(){
    this.fingerprintAuth
      .verifyFingerprint({
        title: 'Check Mobile App Authentication',
        message: 'Bitte scanne deinen Finger, um dich als angemeldeter Nutzer des Geräts zu authentifizieren.',
      })
      .then((enteredPassword?: string) => {
        if (enteredPassword === undefined) {
          this.authenticationSuccess = true;
        }
      })
      .catch((err) =>
        this.authenticationSuccess = false);
  }
}
