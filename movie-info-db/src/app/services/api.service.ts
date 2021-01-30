import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  private resultsUpdated = new Subject<any>();
  results: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search(search: string) {
    this.getData(search).subscribe((data) => {
      console.log(data);
      data.forEach((data) => {});
      this.resultsUpdated.next(data.titles);
    });
  }

  getData(search?: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('searchQuery', search);
    return this.http.get('http://localhost:3000/search', {
      params: { type: 'search', searchQuery: search },
    });
  }

  getResultsUpdateListener() {
    return this.resultsUpdated.asObservable();
  }

  checkExist() {}
}
