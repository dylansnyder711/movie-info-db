import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { LandingCarouselComponent } from './components/landing-carousel/landing-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResultListComponent } from './components/result-list/result-list.component';
import { MovieResultComponent } from './components/movie-result/movie-result.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    LandingCarouselComponent,
    ResultListComponent,
    MovieResultComponent,
    MovieInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
