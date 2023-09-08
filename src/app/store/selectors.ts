import { select } from '@ngneat/elf';
import { authStore } from './store';
import { tap } from 'rxjs';

export const $tokenSelector = authStore.pipe(
  select((state) => {
    console.log(state);
    return state.token;
  })
);
export const $isLoggedIn = authStore.pipe(select((state) => !!state.token));

export function resetStore() {
  authStore.update((auth) => {
    return {
      token: '',
    };
  });
  location.reload();
  console.log(authStore.getValue());
}
