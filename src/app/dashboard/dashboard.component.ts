import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OjasSerService } from '../ojas-ser.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  admincard = false;
  uploadTimesheet = false;
  email = false;
  password = false;
  btn1 = true;
  btn2 = false;
  adminId: any;
  empdata: any;
  pin: any;
  constructor(private router: Router, private ser: OjasSerService) { }

  ngOnInit(): void {
    this.ser.getAdminData().subscribe((data: any) => this.empdata = data);
  }

  gotoLogin() {
    this.router.navigate(['Login'])
  }
  adminLogin() {
    this.uploadTimesheet = false;
    this.admincard = !this.admincard
  }
  timesheetUpload() {
    this.admincard = false;
    this.uploadTimesheet = !this.uploadTimesheet
  }
  getadminData() {
    let data = this.empdata.find((val: any) => this.adminId == val.empid);
    if (data) {
      this.email = true;
      this.password = true;
      this.btn1 = false;
      this.btn2 = true;
    }
    else {
      alert("U have no access to login this page ...!")
    }
  }
  gotoadmin() {
    
    if (this.email && this.pin === "6677") {
      this.router.navigate(["Admin"])
    }
    else {
      alert("Hello Admin ! please Enter correct Pin ...")
    }
  }

}
