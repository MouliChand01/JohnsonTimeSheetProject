import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  loginform: any;
  errorMessgae: any;
  userData:any;

  constructor(private ser: OjasSerService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getUserData();
    this.loginform = new FormGroup({
      empName: new FormControl('', [Validators.required]),
      clientName: new FormControl("", [Validators.required]),
      startDate: new FormControl("", [Validators.required]),
      endDate: new FormControl("", [Validators.required]),
      fileupload: this.fb.group({
        fileName: new FormControl("", [Validators.required])
      })
    });
  }

  submited() {
    alert(`fileUpload was done...!`);
    console.log(this.loginform.value)
    // this.ser.postfileUpload(this.loginform.value).subscribe((res) => console.log(res));
    // this.loginform.reset();
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  getUserData(){
   this.ser.getUserData().subscribe((data:any)=>{this.userData=data,console.log(data)})
  }

  onImageChangeFromFile(event: any) {
    let file = event.target.files[0];
    if (file.type == "image/jpeg" || file.type == 'image/png' || file.type == "application/pdf") {
    }
    else {
      this.errorMessgae = "*Png,xlsx,jpeg Files are Required"
    }
  }
}