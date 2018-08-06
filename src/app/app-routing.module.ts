import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './main/home/home.component';
import { MylistComponent } from './main/mylist/mylist.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'mylist', component: MylistComponent }
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