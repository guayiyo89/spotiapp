import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: []
})
export class AlbumComponent implements OnInit {

  album: any = { };
  songs: any[] = [];

  constructor(private _activatedRoute:ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
  	this._activatedRoute.params
  		.map(params=>params['id'])
  		.subscribe(
  		id=>{
  			console.log(id);
  			this._spotify.getAlbum(id).subscribe(
  				disco=>{console.log(disco);
  					this.album = disco; //asigno el artista del id al objeto artista vacio
  				}
  			);//el id lo obtiene del map

  			this._spotify.getSongbyAlbum(id)
  				.map( (resp:any)=>resp.items )//resp.any es pq no sabemos de q variable son las canciones
  				.subscribe(
  				canciones =>{console.log(canciones);
  				this.songs = canciones;
  				}
  				)

  		}
  		)
  }

}
