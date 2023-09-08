import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regexPatterns } from 'src/app/regex/regex';
import { registrationStore } from 'src/app/store/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    dateOfBirth: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.pattern(regexPatterns.emailRegex)],
    ],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(regexPatterns.lebaneseNumberRegex),
      ],
    ],
    profilePicture: ['', [Validators.required]],
    stageName: [''],
    artistBackstory: [''],
    startingDate: [''],
    albums: new FormArray([
      this.fb.group({
        picture: [''],
        date: [''],
        songs: new FormArray([
          this.fb.group({
            name: [''],
            duration: [''],
          }),
        ]),
      }),
    ]),
  });

  maxDate = new Date(new Date().getFullYear() - 26, 12, 31);

  constructor(private fb: FormBuilder, private router: Router) {}

  didClickAddAlbum() {
    (this.registrationForm.get('albums') as FormArray).push(
      this.fb.group({
        picture: [''],
        date: [''],
        songs: new FormArray([
          this.fb.group({
            name: [''],
            duration: [''],
          }),
        ]),
      })
    );
  }
  didClickRemoveAlbum(index: number) {
    (this.registrationForm.get('albums') as FormArray).removeAt(index);
  }

  didClickAddSong(index: number) {
    const specificAlbum = this.registrationForm.get('albums') as FormArray;
    (specificAlbum.controls[index]?.get('songs') as FormArray).push(
      this.fb.group({
        name: [''],
        duration: [''],
      })
    );
  }

  didClickRemoveSong(index: number, indexToRemove: number) {
    const specificAlbum = this.registrationForm.get('albums') as FormArray;
    (specificAlbum.controls[index]?.get('songs') as FormArray).removeAt(
      indexToRemove
    );
  }
  onFileSelected(event: any) {
    this.registrationForm.patchValue({ profilePicture: event.target.value });
  }

  submitForm() {
    console.log(registrationStore.getValue());
    registrationStore.update((state) => {
      return this.registrationForm.value as any;
    });
    console.log(registrationStore.getValue());
  }
  navigateBack() {
    this.router.navigate(['/']);
  }
}
