import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
public termino:string = '';

  constructor(public _spotify:SpotifyService) {
  	//subscribe extrae lo venido desde el servicio
  }

  buscarArtistas(){
  	//si no se escribe nada, no hace nada
  	if(this.termino.length == 0){
  		return;
  	}

  	this._spotify.getArtistas(this.termino).subscribe(
  		artistas =>{
  			console.log('info lista');
  			console.log( artistas );//mapeo la respuesta(ver console lgo en Consola)
  		});
  }

  ngOnInit() {
  }

}
