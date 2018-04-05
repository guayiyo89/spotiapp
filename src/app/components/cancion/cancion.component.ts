import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styles: []
})
export class CancionComponent implements OnInit {

  cancion: any = { };

  constructor(private _activatedRoute:ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
  	this._activatedRoute.params
  		.map(params=>params['id'])
  		.subscribe(
  		id=>{
  			console.log(id);
  			this._spotify.getCancion(id).subscribe(
  				cancion=>{console.log(cancion);
  					this.cancion = cancion; //asigno el artista del id al objeto artista vacio
  				}
  			);//el id lo obtiene del map
		}
		)
  }

}
