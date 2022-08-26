import { Component } from '@angular/core';
import * as SocialShare from "@nativescript/social-share";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {

  constructor() {}

  ngOnInit(): void {
  }

  onShareText(input: string){
    SocialShare.shareText(input);
  }
}
