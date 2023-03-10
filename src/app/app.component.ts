import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _auth: AuthService,private http:HttpClient){}
  title = 'mean-app';
  logOut(){

    this._auth.logOutUser();
  }

  
}
