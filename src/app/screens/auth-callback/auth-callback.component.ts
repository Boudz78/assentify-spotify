import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { authStore } from 'src/app/store/store';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss'],
})
export class AuthCallbackComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    if (this.route.snapshot.fragment !== null) {
      const authCredentials = {
        access_token: new URLSearchParams(this.route.snapshot.fragment).get(
          'access_token'
        ),
        token_type: new URLSearchParams(this.route.snapshot.fragment).get(
          'token_type'
        ),
        expires_in: new URLSearchParams(this.route.snapshot.fragment).get(
          'expires_in'
        ),
      };
      console.log('before update', authStore.getValue());
      authStore.update(() => {
        return {
          token: `${authCredentials.token_type} ${authCredentials.access_token}`,
        };
      });
      console.log('after update', authStore.getValue());
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
