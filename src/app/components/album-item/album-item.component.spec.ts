import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumItemComponent } from './album-item.component';

describe('AlbumItemComponent', () => {
  let component: AlbumItemComponent;
  let fixture: ComponentFixture<AlbumItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumItemComponent]
    });
    fixture = TestBed.createComponent(AlbumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
