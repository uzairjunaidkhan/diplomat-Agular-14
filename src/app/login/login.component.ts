import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isfetch:boolean = false ;
  public loginUserData = {'email': '', 'password': ''}
  
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    
  }
  loginUser(){
    this.isfetch = false
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => { console.log(res)
        localStorage.setItem('token', res.token) //storing token in local storage
        this._auth.decodedToken();              // decoding token
        this._router.navigate(['/special'])
        },
      err => console.log(err)
    )
    // console.log(this.loginUserData)
    this.isfetch = true
  }


}
