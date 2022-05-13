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
  errorMessgae:any;

  constructor(private ser: OjasSerService) { }
  ngOnInit(): void {
    this.loginform = new FormGroup({
      empName: new FormControl('', [Validators.required]),
      clientName: new FormControl("", [Validators.required]),
      startDate: new FormControl("", [Validators.required]),
      endDate: new FormControl("", [Validators.required]),
      fileName: new FormControl("", [Validators.required])
    });
  }

  submited() {
    console.log(this.loginform.value)
    alert(`fileUpload was done...!`);
    this.loginform.reset();
    this.ser.fileUpload(this.loginform.value).subscribe((res)=>console.log(res))
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  
  onImageChangeFromFile($event: any) {
      let file = $event.target.files[0];
      if (file.type == "image/jpeg"  || file.type == 'image/png' || file.type == "application/pdf" ) {
      }
      else {
        this.errorMessgae = "*Png,xlsx,jpeg Files are Required"
      }
  }
}