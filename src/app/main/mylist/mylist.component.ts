import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {

  public MyFav = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getMyFavorites();
  }
  
  getMyFavorites() {
    return this.MyFav = JSON.parse(window.localStorage.getItem('MyFavorites')) || [];
  }

  removeMovieFromMyList(i) {
    this.MyFav.splice(i, 1);
    window.localStorage.setItem('MyFavorites', JSON.stringify(this.MyFav));
  }

  removeAllMovies() {
    window.localStorage.removeItem('MyFavorites');
  }

  navigateToMoviePage(id) {
    this.router.navigate(['/mylist', id], { queryParams: { id }})
  }

}
