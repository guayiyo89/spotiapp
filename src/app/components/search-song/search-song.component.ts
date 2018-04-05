import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search-song',
  templateUrl: './search-song.component.html',
  styles: []
})
export class SearchSongComponent implements OnInit {
  
  public termino:string = '';
  constructor(public _spotify:SpotifyService) { }

  buscaSong(){

  	if(this.termino.length == 0){
  		return;
  	}

  	this._spotify.getCanciones(this.termino).subscribe(
  		canciones =>{
  			console.log('info lista');
  			console.log( canciones );//mapeo la respuesta(ver console lgo en Consola)
  		});
  }

  ngOnInit() {
  }

}
