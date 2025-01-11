import { TestBed } from '@angular/core/testing';

import { UserMetaDataService } from './user-meta-data.service';

describe('UserMetaDataService', () => {
  let service: UserMetaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMetaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
