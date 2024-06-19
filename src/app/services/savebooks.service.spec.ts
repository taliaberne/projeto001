import { TestBed } from '@angular/core/testing';

import { SavebooksService } from './savebooks.service';

describe('SavebooksService', () => {
  let service: SavebooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavebooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
