import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isfetch:boolean = false ;
  public registerUserData = {'email': '', 'password': '', 'role': 'User'} //role added
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.isfetch = false
    this._auth.registerUser(this.registerUserData)   //observable
    .subscribe(
      res => { console.log(res)
      localStorage.setItem('token', res.token);
      this._auth.decodedToken();   
      this._router.navigate(['/special'])
      },
      err => console.log(err)
    )
    this.isfetch = true
    // console.log(this.registerUserData)
  }
}
