import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MovieService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  public MyFavoritesMovies = [];
  public currentMovieId: any;
  public currentMovie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        this.currentMovieId = params['id'];
      })
      this.MyFavoritesMovies = this.movieService.getMyFavorites();
      this.currentMovie = this.MyFavoritesMovies.find(p => p.imdbID === this.currentMovieId);
  }

}
