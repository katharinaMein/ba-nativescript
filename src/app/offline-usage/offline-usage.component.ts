import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, pluck, startWith, tap} from "rxjs";
import * as AppSettings from '@nativescript/core/application-settings';
import {BackHomeService} from "~/app/backHome.service";

interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-offline-usage',
  templateUrl: './offline-usage.component.html',
  styleUrls: ['./offline-usage.component.css']
})
export class OfflineUsageComponent implements OnInit {
  usersArray$!: Observable<User[]>;
  isLoading = false;

  constructor(private http: HttpClient, public bhS: BackHomeService) { }

  ngOnInit() {
    this.isLoading = true;
    this.usersArray$ = this.http.get<{users: User[]}>('https://dummyjson.com/users').pipe(
      map(val => val.users),
      tap(() => this.isLoading = false),
      tap((usersArray) => AppSettings.setString('nameArray', JSON.stringify(usersArray))),
      startWith(JSON.parse(AppSettings.getString('nameArray', '[]'))),
      catchError(err => {
        alert(err);
        this.isLoading = false;
        throw err;
      })
    );
  }
}
