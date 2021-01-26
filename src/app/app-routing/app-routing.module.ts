import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AlbumsComponent } from '../albums/albums.component';
import { PhotosComponent } from '../photos/photos.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'albums',
    pathMatch: 'full'
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'photos/:id',
    component: PhotosComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
