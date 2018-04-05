import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styles: []
})
export class ArtistsComponent implements OnInit {
//para seguir la ruta del id usamos el servicio activated route y wea
  artista: any = { };
  songs: any[] = [];
  discos: any [] = [];

  constructor(private _activatedRoute:ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
  	this._activatedRoute.params
  		.map(params=>params['id'])
  		.subscribe(
  		id=>{
  			console.log(id);
  			this._spotify.getArtista(id).subscribe(
  				artista=>{console.log(artista);
  					this.artista = artista; //asigno el artista del id al objeto artista vacio
  				}
  			);//el id lo obtiene del map

  			this._spotify.getTop(id)
  				.map( (resp:any)=>resp.tracks )//resp.any es pq no sabemos de q variable son las canciones
  				.subscribe(
  				canciones =>{console.log(canciones);
  				this.songs = canciones;
  				}
  				)

          this._spotify.getAlbumbyArtist(id)
          .map( (resp:any)=>resp.items )//resp.any es pq no sabemos de q variable son las canciones
          .subscribe(
          albumes =>{console.log(albumes);
          this.discos = albumes;
          }
          )
  		}
  		)
  }

}
