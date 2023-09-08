import { Component, HostListener, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  debounceTime,
  filter,
  map,
  pipe,
  switchMap,
  tap,
} from 'rxjs';
import { album } from 'src/app/models/album';
import { artist } from 'src/app/models/artist';
import { ApiService } from 'src/app/services/api.service';
import { UtilityService } from 'src/app/services/utility.service';
import { resetStore } from 'src/app/store/selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    private apiService: ApiService,
    public utilityService: UtilityService
  ) {}

  openAlbums = false;

  calledOnce = false;
  firstSearch = true;

  currentArtistName = '';

  $inputQueryTrigger = new BehaviorSubject<string>('');

  $displayedAlbums = new BehaviorSubject<album[]>([]);

  $artists = this.$inputQueryTrigger.pipe(
    debounceTime(500),
    filter((query: string) => query.trim().length > 0),
    tap(() => {
      this.firstSearch = false;
    }),
    switchMap((query: string) => {
      return this.apiService.getArtists(query).pipe(
        map((data) => {
          const MappedArtists = data.artists.items.map((artist: any) => ({
            id: artist.id,
            name: artist.name,
            followers: artist.followers.total,
            popularity: artist.popularity,
            href: artist.href,
            imageRef:
              artist.images?.[0]?.url ??
              'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png',
          }));
          return MappedArtists;
        })
      );
    })
  );

  ngOnInit() {}

  //Listen when a user scrolls to bottom page.
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (
      document.body.clientHeight + window.scrollY + 20 >=
      document.body.scrollHeight
    ) {
      if (this.calledOnce === false) {
        console.log('now should load more..');
        this.calledOnce = true;
      }
    }
  }
  retrieveAlbumsFor(artistName: string) {
    this.currentArtistName = artistName;
    console.log(artistName);
    this.apiService
      .getAlbums(artistName)
      .pipe(
        map((data) => {
          console.log(data);
          const MappedArtists = data.albums.items.map((album: any) => ({
            name: album.name,
            nameOfArtist: album.artists[0].name,
            Date: album.release_date,
            TrackAmount: album.total_tracks,
            href: album.href,
            imageRef:
              album.images?.[0]?.url ??
              'https://mcleansmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
          }));
          return MappedArtists;
        })
      )
      .subscribe((res) => {
        this.$displayedAlbums.next(res);
        this.openAlbums = true;
      });
  }
  onBackArrowClick() {
    this.$displayedAlbums.next([]);
    this.openAlbums = false;
  }
  logOut() {
    resetStore();
  }
}
