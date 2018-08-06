import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  public MyFavoritesMovies = [];
  public currentMovieId: any;
  public currentMovie: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        this.currentMovieId = params['id'];
      })
      this.MyFavoritesMovies = this.getMyFavorites();
      this.currentMovie = this.MyFavoritesMovies.find(p => p.imdbID === this.currentMovieId);
      console.log(this.currentMovie);
  }

  getMyFavorites() {
    return this.MyFavoritesMovies = JSON.parse(window.localStorage.getItem('MyFavorites')) || [];
  }

}
