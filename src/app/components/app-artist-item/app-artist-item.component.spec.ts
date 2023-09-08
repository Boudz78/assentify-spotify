import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppArtistItemComponent } from './app-artist-item.component';

describe('AppArtistItemComponent', () => {
  let component: AppArtistItemComponent;
  let fixture: ComponentFixture<AppArtistItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppArtistItemComponent]
    });
    fixture = TestBed.createComponent(AppArtistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
