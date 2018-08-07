import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './main/home/home.component';
import { MylistComponent } from './main/mylist/mylist.component';
import { MoviePageComponent } from './main/movie-page/movie-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'mylist', component: MylistComponent },
    { path: 'mylist/:id', component: MoviePageComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}