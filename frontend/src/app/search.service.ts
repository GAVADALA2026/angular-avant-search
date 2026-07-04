import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  base = 'http://localhost:3333/api';
  constructor(private http: HttpClient) {}

  search(q: string): Observable<any> {
    const params = new HttpParams().set('q', q);
    return this.http.get(`${this.base}/search`, { params });
  }

  page(slug: string): Observable<any> {
    return this.http.get(`${this.base}/page/${slug}`);
  }

  llm(query: string): Observable<any> {
    return this.http.post(`${this.base}/llm`, { query });
  }
}
