import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent {
  constructor(private apiService: ApiService, private router: Router) {}
  didAttemptSpotifyLogin() {
    window.location.href = `${environment.spotify_auth_url}?response_type=token&client_id=${environment.client_id}&scope=${environment.scope}&redirect_uri=${environment.redirect_uri}`;
  }

  didAttemptToSignUp() {
    this.router.navigate(['/register']);
  }

  didClickGetArtists() {
    this.apiService.getArtists('ak').subscribe((res) => {
      console.log('fired!');
      console.log(res);
    });
  }
}
