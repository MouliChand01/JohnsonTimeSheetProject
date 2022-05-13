import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OjasSerService {

  fileupload_url="http://localhost:9090/uploadFile";
  timesheet_url="http://localhost:9090/addTimeSheet"

  constructor(private http:HttpClient) { }

  fileUpload(data:any){
    return this.http.post(this.fileupload_url,data)
  }
}
