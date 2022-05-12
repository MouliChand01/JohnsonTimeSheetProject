import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  loginform: any;
  constructor(private ser:OjasSerService) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      EmployeeName: new FormControl('',[Validators.required]),
      employeeid: new FormControl('',[Validators.required]),
      clientName: new FormControl("",[Validators.required]),
      startDate: new FormControl("",[Validators.required]),
      endDate: new FormControl("",[Validators.required]),
      FileName: new FormControl("",[Validators.required])
    });
  }
  
  submited(){
    console.log(this.loginform.value)
    alert(`fileUpload was done...!`);
    this.loginform.reset();
  }

}
