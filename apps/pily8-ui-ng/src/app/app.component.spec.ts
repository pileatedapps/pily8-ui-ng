import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AUTH_PROVIDER } from './app.config';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

jest.mock('@auth0/auth0-spa-js');
describe('AppComponent', () => {
  const mockAuthModule = jest.createMockFromModule('@auth0/auth0-spa-js');
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      providers: [
        AUTH_PROVIDER,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  });

  it('should render login button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Log in'
    );
  });

  it(`should have as title 'pily8-ui-ng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pily8-ui-ng');
  });
});
