import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(SearchService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('sends the search query to the API', () => {
    service.search('sicurezza').subscribe((response) => expect(response.results).toEqual([]));

    const request = http.expectOne('http://localhost:3333/api/search?q=sicurezza');
    expect(request.request.method).toBe('GET');
    request.flush({ results: [] });
  });
});