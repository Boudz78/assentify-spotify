import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  finalize,
  switchMap,
  tap,
  throwError,
  timeout,
} from 'rxjs';
import { authStore } from '../store/store';
import { $tokenSelector, resetStore } from '../store/selectors';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint = 'https://api.spotify.com/v1/';

  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) {}

  getArtists(searchQuery: string, overrideURL?: string): Observable<any> {
    let url = `${this.endpoint}search?q=${searchQuery}&type=artist`;
    if (overrideURL) {
      url = overrideURL;
    }
    this.utilityService.isLoading.next(true);
    return $tokenSelector.pipe(
      switchMap((token) => {
        return this.http
          .get<any>(url, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`,
            },
          })
          .pipe()
          .pipe(
            timeout(30000),
            tap(() => {
              this.utilityService.isLoading.next(false);
            }),
            catchError((error: HttpErrorResponse) => {
              this.utilityService.isLoading.next(false);
              resetStore();

              return throwError(error);
            })
          );
      }),
      finalize(() => {
        this.utilityService.isLoading.next(false);
      })
    );
  }

  getAlbums(searchQuery: string): Observable<any> {
    let url = `${this.endpoint}search?q=${searchQuery}&type=album`;
    this.utilityService.isLoading.next(true);
    return $tokenSelector.pipe(
      switchMap((token) => {
        return this.http
          .get<any>(url, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `${token}`,
            },
          })
          .pipe(
            timeout(30000),
            tap(() => {
              this.utilityService.isLoading.next(false);
            }),
            catchError((error: HttpErrorResponse) => {
              this.utilityService.isLoading.next(false);
              resetStore();
              return throwError(error);
            })
          );
      }),
      finalize(() => {
        this.utilityService.isLoading.next(false);
      })
    );
  }
}
