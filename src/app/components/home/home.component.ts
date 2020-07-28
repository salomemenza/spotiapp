import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorText: string;

  constructor( private _spotiService: SpotifyService) {
    this.error = false;
    this.loading = true;
    this._spotiService.getNewReleases().subscribe(
      (data:any)=>{
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.errorText = errorServicio.error.error.message;
      }
    );
  }

  ngOnInit(): void {
  }

}
