import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes = [
  {path:"",redirectTo:"Login",pathMatch:"full"},
  {path:"Login",component:LoginPageComponent},
  {path:"NewUser",component:NewuserComponent},
  {path:"fileUpload",component:FileUploadComponent},
  {path:"Dashboard",component:DashboardComponent},
  {path:"Admin",component:AdminpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
