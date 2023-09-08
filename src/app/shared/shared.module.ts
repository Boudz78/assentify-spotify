import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SharedModule {}
