import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: any[];
  view:string = 'grid';

  constructor() {
      
  }

  ngOnInit(): void {
    this.albums = [{
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },{
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },{
      "userId": 2,
      "id": 11,
      "title": "quam nostrum impedit mollitia quod et dolor"
    }];
  }

  switchView(view): void {
    this.view = view;
  }

}
