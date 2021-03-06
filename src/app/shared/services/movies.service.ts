import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MovieService {

    public MyFavoritesMovies = []; 

    constructor(private http: HttpClient) {}
    
    searchFilm(filmName) {
        return this.http.get(`http://www.omdbapi.com/?t=${filmName}&apikey=2d515c11`);
    }

    getFilmById(id) {
        return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=2d515c11`);
    }

    getMyFavorites() {
        return this.MyFavoritesMovies = JSON.parse(window.localStorage.getItem('MyFavorites')) || [];
    }
}