import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() item: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  verArtista(){
    let codigoArtista: string;

    if(this.item.type === 'artist'){
      codigoArtista = this.item.id;
    }else{
      codigoArtista = this.item.artists[0].id;
    }
    
    this._router.navigate(['/artist', codigoArtista]);
  }
}
