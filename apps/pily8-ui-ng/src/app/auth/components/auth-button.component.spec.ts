import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthButtonComponent } from './auth-button.component';
import { AUTH_PROVIDER } from '../../app.config';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

jest.mock('@auth0/auth0-spa-js');
describe('AuthLogoutButtonComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;

  const mockAuthModule = jest.createMockFromModule('@auth0/auth0-spa-js');

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AuthButtonComponent],
      providers: [
        AUTH_PROVIDER,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
