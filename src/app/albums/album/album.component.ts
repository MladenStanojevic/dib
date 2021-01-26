import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() view: string;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data.title);
  }

}
