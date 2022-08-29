import { Component } from '@angular/core';
import * as SocialShare from "@nativescript/social-share";
import {BackHomeService} from "~/app/backHome.service";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent {

  constructor(public bhS: BackHomeService) {}

  ngOnInit(): void {
  }

  onShareText(input: string){
    SocialShare.shareText(input);
  }
}
