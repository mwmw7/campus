import { TestBed } from '@angular/core/testing';

import { ExhibitionserviceService } from './exhibitionservice.service';

describe('ExhibitionserviceService', () => {
  let service: ExhibitionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExhibitionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
