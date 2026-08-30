import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';

import { SearchService } from './search.service';

describe('SearchService', () => {
  it('sends search queries to the API with the q parameter', () => {
    const get = vi.fn().mockReturnValue(of({ results: [] }));
    const service = new SearchService({ get } as unknown as HttpClient);

    service.search('sicurezza').subscribe();

    expect(get).toHaveBeenCalledWith(
      'http://localhost:3333/api/search',
      expect.objectContaining({ params: expect.anything() }),
    );
    expect(get.mock.calls[0][1].params.get('q')).toBe('sicurezza');
  });
});