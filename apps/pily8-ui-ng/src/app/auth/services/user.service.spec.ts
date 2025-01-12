import { TestBed } from '@angular/core/testing';

import { UserService } from './user-service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AUTH_PROVIDER } from '../../app.config';

jest.mock('@auth0/auth0-spa-js');
describe('UserService', () => {
  let service: UserService;
  const mockAuth = jest.createMockFromModule('@auth0/auth0-spa-js');
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AUTH_PROVIDER,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
