import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  empid: any;
  password: any;
  alluserData: any;

  constructor(private router: Router, private ser: OjasSerService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  gotoFileUpload() {
    let data = this.alluserData.find((val: any) => this.empid == val.empid);
    if (data && data.password == this.password) {
      this.router.navigate(['Dashboard']);
    }
    else {
      alert(`${this.empid} - ur data not in database goto register your self ..!`);
    }
  }

  goToRegister() {
    this.router.navigate(['NewUser']);
  }

  getUserData() {
    this.ser.getUserData().subscribe((data) => this.alluserData = data);
  }

}
