import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'create-account',
        component: CreateAccountComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'recovery-password',
        component: RecoveryPasswordComponent
    },
    {
        path: 'new-password',
        component: NewPasswordComponent
    }
];
