import { ApplicationConfig, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
export const AUTH_PROVIDER: Provider[] = provideAuth0({
  domain: 'pileatedapps.us.auth0.com',
  clientId: '16IGe4QwMfRCmwu8r9ITPKdXt5tG9CmX',
  authorizationParams: {
    redirect_uri: window.location.origin,
    // Request this audience at user authentication time
    audience: 'https://pileatedapps.us.auth0.com/api/v2/',

    // Request this scope at user authentication time
    scope: 'read:current_user',
  },
  // Specify configuration for the interceptor
  httpInterceptor: {
    allowedList: [
      {
        // Match any request that starts 'https://pileatedapps.us.auth0.com/api/v2/' (note the asterisk)
        uri: 'https://pileatedapps.us.auth0.com/api/v2/*',
        tokenOptions: {
          authorizationParams: {
            // The attached token should target this audience
            audience: 'https://pileatedapps.us.auth0.com/api/v2/',

            // The attached token should have these scopes
            scope: 'read:current_user'
          }
        }
      }
    ]
  }
})
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    AUTH_PROVIDER,
    provideHttpClient(withInterceptors([authHttpInterceptorFn]))
  ],
};
