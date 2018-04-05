import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SearchSongComponent } from './components/search-song/search-song.component';
import { SearchAlbumComponent } from './components/search-album/search-album.component';
import { AlbumComponent } from './components/album/album.component';
import { CancionComponent } from './components/cancion/cancion.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'search', component: SearchComponent},
	{ path: 'artistas/:id', component: ArtistsComponent},
	{ path: 'search-song', component: SearchSongComponent},
	{ path: 'search-album', component: SearchAlbumComponent},
	{ path: 'canciones/:id', component: CancionComponent},
	{ path: 'album/:id', component: AlbumComponent},
	{ path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash:true});