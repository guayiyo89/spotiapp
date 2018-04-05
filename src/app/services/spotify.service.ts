import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';//importamos para poder usar el mapeo


@Injectable()
export class SpotifyService {

token:string = 'BQBzKoNiQUU2Vollgbl0psHLZHSx81Xy9B2Mw424zXnVaspN41zkmKhszNtRQETYrtPJ88ExdVaZ-1GMV2I';
artistas: any[] = [];
canciones: any[] = [];
albumes: any[] = [];

urlSpotify: string = 'https://api.spotify.com/v1/';

  constructor(public http:HttpClient) {
  	console.log('Servicio Spotify Listo');
  }

  private getHeaders(): HttpHeaders{ //funcion que devuelve objeto del tipo http headers
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getTop(id:string){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getAlbumbyArtist(id:string){
    let url = `${ this.urlSpotify }artists/${ id }/albums?album_type=album&limit=50`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getAlbum(id:string){
    
    let url = `${ this.urlSpotify }albums/${ id }`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  getAlbumes(termino:string){
    
    let url = `${ this.urlSpotify }search?query=${ termino }&type=album&limit=25`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers }).map(
      (resp: any) =>{ //resp any para que reconozca 'artists' y no de problemas
        this.albumes = resp.albums.items; // relleno el arreglo vacio con los datos de la busqueda
        return this.albumes;
      }
      )
  }

  getSongbyAlbum(id:string){
    let url = `${ this.urlSpotify }albums/${ id }/tracks`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers });
  }


  getCancion(id:string){
    
    let url = `${ this.urlSpotify }tracks/${ id }`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers });
  }

  getCanciones(termino:string){
    
    let url = `${ this.urlSpotify }search?query=${ termino }&type=track&limit=25`;
    let headers = this.getHeaders();
    return this.http.get(url, { headers }).map(
      (resp: any) =>{ //resp any para que reconozca 'artists' y no de problemas
        this.canciones = resp.tracks.items; // relleno el arreglo vacio con los datos de la busqueda
        return this.canciones;
      }
      )
  }

  getArtista(id:string){
    let url = `${ this.urlSpotify }artists/${ id }`;
    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }


  getArtistas( termino:string ){
  	let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=25`;//$termino es la palabra a buscar. Ojo no se usan comilllas. (ES6)
    let headers = this.getHeaders();
  //los headers con el token de spotify

//logica del operador map para extraer la data
  	return this.http.get(url, { headers }).map(
      (resp: any) =>{ //resp any para que reconozca 'artists' y no de problemas
        this.artistas = resp.artists.items; // relleno el arreglo vacio con los datos de la busqueda
        return this.artistas;
      }
      )
  }

}
