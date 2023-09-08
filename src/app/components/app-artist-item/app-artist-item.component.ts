import { Component, Input } from '@angular/core';
import { artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artist-item',
  templateUrl: './app-artist-item.component.html',
  styleUrls: ['./app-artist-item.component.scss'],
})
export class AppArtistItemComponent {
  @Input() artist!: artist;
  constructor() {}

  ngOnInit(): void {}
  calculateStars(popularity: any) {
    return Math.ceil(popularity / 10 / 2);
  }
  calculateEmptyStars(popularity: any) {
    return 5 - Math.ceil(popularity / 10 / 2);
  }
}
