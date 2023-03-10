import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //service

  private _loinUrl = "https://easy-cyan-kitten-tam.cyclic.app/api/login"
  private _registerUrl = "https://easy-cyan-kitten-tam.cyclic.app/api/register"
  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user:any){
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user:any){
    return this.http.post<any>(this._loinUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
  logOutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/login'])
  }
  
  /////////
  
  getToken(){
    return localStorage.getItem('token')
  }

  decodedToken(){
    const JwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    // console.log(JwtHelper.decodeToken(token))
    const decoToken = JwtHelper.decodeToken(token)
    const userRole = decoToken.role;
    return userRole;
    // console.log(userRole)
    // return JwtHelper.decodeToken(token)
  }
}
