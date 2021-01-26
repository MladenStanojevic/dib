import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumComponent } from './albums/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    LoginComponent,
    PhotosComponent,
    AlbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
