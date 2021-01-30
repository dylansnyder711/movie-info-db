import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie.model';

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.css'],
})
export class MovieResultComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}
}
