import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ...AUTH_COMPONENTS
  ]
})
export class AuthModule { }
