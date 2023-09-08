import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  isLoading = new BehaviorSubject<boolean>(false);
  constructor() {}

  trackByFn(index: any, item: any) {
    return index;
  }
}
