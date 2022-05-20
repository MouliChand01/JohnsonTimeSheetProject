import { Component, OnInit } from '@angular/core';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  timeSheetsData:any;

  constructor(private ser:OjasSerService) { }

  ngOnInit(): void {
    this.getTimeSheets();
  }

  getTimeSheets(){
   this.ser.getTimeSheets().subscribe((data:any)=>this.getTimeSheets=data)
  }


}
