import { Component, Input } from '@angular/core';
import { album } from 'src/app/models/album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss'],
})
export class AlbumItemComponent {
  @Input() album!: album;

  constructor() {}

  ngOnInit(): void {}
  openURL(url: any) {
    console.log(url);
    window.open(url, '_blank');
  }
}
