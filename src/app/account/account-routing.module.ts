import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import {ForgotPasswordComponent} from './forgotpassword.component';
import { OTPComponent } from './otp.component';
import {NewPasswordComponent} from './newpassword.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            {path: 'forgotpassword', component: ForgotPasswordComponent},
            {path: 'otp', component: OTPComponent},
            {path: 'newpassword', component:NewPasswordComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }