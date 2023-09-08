import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { $isLoggedIn } from '../store/selectors';

@Injectable({
  providedIn: 'root',
})
export class UnauthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return $isLoggedIn.pipe(
      map((result) => !result),
      tap((result) => {
        if (!result) {
          this.router.navigate(['/dashboard']);
        }
      })
    );
  }
}
