import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movie: any;
  public ratings = [];
  public MyFavoritesMovies = [];
  public messageText: string = 'Выполнил Наранов А.А.';

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
  }
  
  onSubmit(form) {
    this.movieService.searchFilm(form.value.movieName)
      .subscribe((data) => {
        if (data['Error']) {
          this.setMessageText(data['Error']);
        } else {
          this.setMessageText('The movie is found');
          this.movie = data;
          this.ratings = data['Ratings'];
        }
      });
  }

  addToMyFavorite() {
    const favorites: any = this.movieService.getMyFavorites();
    let currrentMovie = favorites.find(p => p.imdbID === this.movie.imdbID)
    if (currrentMovie) {
      this.setMessageText('The movie has already been added to My Favorites');
    } else {
      this.setMessageText('The movie has been add to My Favorites');
      favorites.push(this.movie);
      window.localStorage.setItem('MyFavorites', JSON.stringify(favorites));
      return this.movie;
    }
  }

  setMessageText(text: string) {
    this.messageText = text;
  }

}
