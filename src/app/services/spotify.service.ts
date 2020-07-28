import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private api: string;
  private headers;

  constructor(private _httpClient: HttpClient) {
    this.api = 'https://api.spotify.com/v1/';
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer BQCKlotxInmPf5sK82jSssb0K7mbzUqWzywDYQ4gTcT4HxE0sRATIRFEX2qH5hu_i9YNXlvC_YrvBiDk5e4xd5YztnWqpAvsvk7uijqzg7MCHbVzBiJc78ckCQtENfCuGvvwSjgvdmYZ'
    });
  }

  getNewReleases(){
    return this._httpClient.get(this.api + 'browse/new-releases',{headers: this.headers}).pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  searchArtista(termino: string){
    return this._httpClient.get(this.api + 'search?q='+termino+'&type=artist',{headers: this.headers}).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }

  getArtist(id: string){
    return this._httpClient.get(this.api + 'artists/' + id,{headers: this.headers});
  }

  getTopTracks(id: string){
    return this._httpClient.get(this.api + 'artists/' + id + '/top-tracks?country=es',{headers: this.headers}).pipe(
      map((data: any) => {
        return data.tracks;
      })
    );
  }
}
