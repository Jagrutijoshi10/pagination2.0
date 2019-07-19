import { TestBed } from '@angular/core/testing';

import { PagesserviceService } from './pagesservice.service';

describe('PagesserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesserviceService = TestBed.get(PagesserviceService);
    expect(service).toBeTruthy();
  });
});
