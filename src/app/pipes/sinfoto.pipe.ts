import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {
//imagenes es el arreglo de imagenes
  transform(imagenes: any[]): any {//si no hay arreglo de imagenes tira esta imagen
  	let noImage = 'assets/img/noimage.png';
  	if(!imagenes){
  		return noImage;
  	}
    return(imagenes.length > 0)? imagenes[1].url : noImage;
  }

}
