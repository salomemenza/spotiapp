import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  loading: boolean;
  idArtista: string;
  artista: any = {};
  topTracks: any[];

  constructor( private _route: ActivatedRoute, private _spotifyService: SpotifyService) {
    this.loading = true;
    this._route.params.subscribe( params => {
      this.idArtista = params.id;
      this.getArtista();
      this.getTopTracks();
    });
  }

  ngOnInit(){}

  getArtista(){
    this._spotifyService.getArtist(this.idArtista).subscribe( data => {
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks(){
    this._spotifyService.getTopTracks(this.idArtista).subscribe( data => {
      console.log(data);
      this.topTracks = data;
    });
  }

}
