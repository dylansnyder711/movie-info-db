import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { ResultListComponent } from './components/result-list/result-list.component';

const routes: Routes = [
  { path: 'movie-info', component: MovieInfoComponent },
  { path: 'result-list', component: ResultListComponent },
  { path: '', redirectTo: '/result-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
