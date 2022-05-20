import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OjasSerService {

 
  NewUserurl="http://localhost:3000/NewUser";
  upLoadFileurl="http://localhost:3000/clentSheetUpload";
  adminurl="http://localhost:3000/Admin";


  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get(this.NewUserurl)
  }

  getAdminData(){
    return this.http.get(this.adminurl)
  }

  getTimeSheets(){
    return this.http.get(this.upLoadFileurl)
  }
  
  // --------------POSTData----------------//

  postfileUpload(data:any){
    return this.http.post(this.upLoadFileurl,data)
  }

  postNewUser(data:any){
    return this.http.post(this.NewUserurl,data)
  }

 
 
}
