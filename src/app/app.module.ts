import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {routing} from './app.routing'
import {ReactiveFormsModule} from '@angular/forms'
import {AuthService} from './service/auth.service'
import {UserService} from './service/user.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
