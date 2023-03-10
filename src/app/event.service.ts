import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventUrl = "https://easy-cyan-kitten-tam.cyclic.app/api/events";
  private _specialUrl = "https://easy-cyan-kitten-tam.cyclic.app/api/special";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventUrl);    
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialUrl);
  }
}
