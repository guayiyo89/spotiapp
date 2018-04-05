import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routes';
import { RouterLink } from '@angular/router';

import { SpotifyService } from './services/spotify.service';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SearchSongComponent } from './components/search-song/search-song.component';
import { SearchAlbumComponent } from './components/search-album/search-album.component';
import { AlbumComponent } from './components/album/album.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistsComponent,
    SearchSongComponent,
    SearchAlbumComponent,
    AlbumComponent,
    CancionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
