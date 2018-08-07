import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './main/home/home.component';
import { MylistComponent } from './main/mylist/mylist.component'
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { MovieService } from './shared/services/movies.service';
import { MoviePageComponent } from './main/movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MylistComponent,
    HeaderComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
