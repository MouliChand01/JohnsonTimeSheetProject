import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OjasSerService } from './ojas-ser.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NewuserComponent,
    FileUploadComponent,
    DashboardComponent,
    AdminpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,

    
  ],
  providers: [OjasSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
