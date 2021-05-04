import { TestBed } from '@angular/core/testing';

import { DateboxService } from './datebox.service';

describe('DateboxService', () => {
  let service: DateboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
