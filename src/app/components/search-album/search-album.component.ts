import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styles: []
})
export class SearchAlbumComponent implements OnInit {

  public termino:string = '';

  constructor(public _spotify:SpotifyService) { }

  buscarAlbumes(){

  	if(this.termino.length == 0){
  		return;
  	}

  	this._spotify.getAlbumes(this.termino).subscribe(
  		albumes =>{
  			console.log('info lista');
  			console.log( albumes );//mapeo la respuesta(ver console lgo en Consola)
  		});
  }

  ngOnInit() {
  }

}
