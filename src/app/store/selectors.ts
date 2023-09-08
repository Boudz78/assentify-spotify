import { select } from '@ngneat/elf';
import { authStore } from './store';
import { tap } from 'rxjs';

export const $tokenSelector = authStore.pipe(
  select((state) => {
    console.log(state);
    return state.token;
  })
);
export const $emailSelector = authStore.pipe(select((state) => state.email));
export const $isLoggedIn = authStore.pipe(
  select((state) => !!state.token),
  tap((data) => {
    console.log('ISLOGGEDIN', data);
  })
);

export function resetStore() {
  authStore.update((auth) => {
    return {
      email: '',
      token: '',
    };
  });
  location.reload();
  console.log(authStore.getValue());
}
