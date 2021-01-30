import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'movie-info-db';
  apiSub: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.search('Mick Foley Hard Knocks and other');
  }

  onGet() {}

  ngOnDestroy() {
    this.apiSub.unsubscribe();
  }
}
