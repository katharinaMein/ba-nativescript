import {ChangeDetectorRef, Component} from '@angular/core';
import * as imagepicker from "@nativescript/imagepicker";
import {Image, ImageAsset} from "@nativescript/core";
import {BackHomeService} from "~/app/backHome.service";


@Component({
  selector: 'app-local-files',
  templateUrl: './local-files.component.html',
  styleUrls: ['./local-files.component.css']
})
export class LocalFilesComponent {
  image = new Image();
  constructor(private cdRef: ChangeDetectorRef, public bhS: BackHomeService) {}

  async onGetImage(){
    let context = imagepicker.create({
      mode: "single"
    });
    await context.authorize();
    const selection = await context.present();
    selection[0].getImageAsync(function(image: ImageBitmap, error: any) {
        error ? alert(error) : null;
        this.image.src = image;
        this.cdRef.detectChanges();
    }.bind(this));
  }
}
