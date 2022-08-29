import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CodeDetectionComponent } from './code-detection/code-detection.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { OfflineUsageComponent } from './offline-usage/offline-usage.component';
import { CameraComponent } from './camera/camera.component';
import { MicrophoneComponent } from './microphone/microphone.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { LocalFilesComponent } from './local-files/local-files.component';
import { ShareComponent } from './share/share.component';
import { VibrationComponent } from './vibration/vibration.component';
import { LocationComponent } from './location/location.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WakeLockComponent } from "~/app/wake-lock/wake-lock.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, HttpClientModule],
  declarations:
    [
      AppComponent,
      OfflineUsageComponent,
      CameraComponent,
      MicrophoneComponent,
      PushNotificationComponent,
      BluetoothComponent,
      LocalFilesComponent,
      ShareComponent,
      VibrationComponent,
      LocationComponent,
      PageNotFoundComponent,
      HomeComponent,
      ContactsComponent,
      WakeLockComponent,
      CodeDetectionComponent,
      AuthenticationComponent
    ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
