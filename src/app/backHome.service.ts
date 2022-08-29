import { Injectable } from '@angular/core';
import {RouterExtensions} from "@nativescript/angular";
import {ActivatedRoute} from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class BackHomeService {

  constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute) {
  }

  navigateToHome(link: string){
    this.routerExtensions.navigate([link]);
  }
}
