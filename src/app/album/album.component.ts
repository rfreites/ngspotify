import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {
  id:string;
  album: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      })
  }

}
