import { createStore, withProps } from '@ngneat/elf';
import { User } from '../models/user';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { registerArtist } from '../models/registerArtist';

export const authStore = createStore(
  { name: 'auth' },
  withProps<User>({
    email: '',
    token: '',
  })
);

export const persist = persistState(authStore, {
  key: 'auth',
  storage: localStorageStrategy,
});

export const registrationStore = createStore(
  { name: 'register' },
  withProps<registerArtist>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    profilePicture: '',
    stageName: '',
    artistBackstory: '',
    startingDate: '',
    albums: [],
  })
);
export const persistRegisterStore = persistState(registrationStore, {
  key: 'register',
  storage: localStorageStrategy,
});
