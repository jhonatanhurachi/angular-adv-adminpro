import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AUTH_COMPONENTS = [
  LoginComponent,
  RegisterComponent,
];

@NgModule({
  declarations: [
    ...AUTH_COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...AUTH_COMPONENTS
  ]
})
export class AuthModule { }
