import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  empid:any;
  password:any;
  constructor(private router:Router,private ser:OjasSerService) { }

  ngOnInit(): void {
  }

  gotoFileUpload(){
   this.router.navigate(['fileUpload'])
  }

  goToRegister(){
    this.router.navigate(['NewUser'])
  }

}
