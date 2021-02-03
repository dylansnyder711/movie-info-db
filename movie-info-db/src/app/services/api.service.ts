import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  private resultsUpdated = new Subject<any>();
  results: Movie[] = [];
  resultsInfo: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search(search: string) {
    this.results = [];
    this.getData('search', search).subscribe((data) => {
      data.forEach((data) => {
        console.log('data: ', data);
        this.results.push({
          title: data.title,
          image: data.image,
          id: data.id,
          rating: 0,
        });
      });
      this.resultsUpdated.next(this.results);

      console.log(this.resultsInfo);
    });
  }

  getMovieById(movieId: string) {
    return this.getData('film', movieId);
  }

  getData(type?: string, search?: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('searchQuery', search);
    return this.http.get('http://localhost:3000/search', {
      params: { type: type, searchQuery: search },
    });
  }

  getResultsUpdateListener() {
    return this.resultsUpdated.asObservable();
  }

  checkExist() {}
}
