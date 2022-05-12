import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewuserComponent } from './newuser/newuser.component';

const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"Login",component:LoginPageComponent},
  {path:"NewUser",component:NewuserComponent},
  {path:"fileUpload",component:FileUploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
