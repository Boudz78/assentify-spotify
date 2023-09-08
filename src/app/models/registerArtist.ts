export interface registerArtist {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  profilePicture: string;
  stageName: string;
  artistBackstory: string;
  startingDate: string;
  albums: Array<{
    picture: string;
    date: string;
    songs: Array<{
      name: string;
      duration: string;
    }>;
  }>;
}
