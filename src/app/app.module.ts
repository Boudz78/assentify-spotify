import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { AuthCallbackComponent } from './screens/auth-callback/auth-callback.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { AppArtistItemComponent } from './components/app-artist-item/app-artist-item.component';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { RegisterComponent } from './screens/register/register.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    AuthCallbackComponent,
    DashboardComponent,
    AppArtistItemComponent,
    NumberSuffixPipe,
    AlbumItemComponent,
    RegisterComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
