import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResultsUpdateListener().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }
}
