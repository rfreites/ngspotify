import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {

  }

  searchStr:string;
  searchRes: Artist[];

  searchMusic(){
    this._spotifyService.searchMusic(this.searchStr)
      .subscribe(resp => {
        console.log(resp.artists.items);
        this.searchRes = resp.artists.items;
      })
  }

}
