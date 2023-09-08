import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { AuthCallbackComponent } from './screens/auth-callback/auth-callback.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';
import { RegisterComponent } from './screens/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent,
    canActivate: [UnauthGuard],
  },
  {
    path: 'authCallback',
    component: AuthCallbackComponent,
    canActivate: [UnauthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UnauthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
