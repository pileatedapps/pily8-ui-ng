import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService, User } from '@auth0/auth0-angular';
import { concatMap, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMetaDataService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  public readonly auth: AuthService = inject(AuthService);

  getUser(): Observable<User> {
    return this.auth.user$
      .pipe(
        concatMap((user: User | null | undefined) =>
          // Use HttpClient to make the call
          this.httpClient.get(
            encodeURI(`https://pileatedapps.us.auth0.com/api/v2/users/${user?.sub}`)
          )
        ),
        tap((user: any) => {console.log(user)}),
        map((user: User) => user )
      )
  }

  getUserMetaData(): Observable<object> {
    return this.auth.user$
      .pipe(
        concatMap((user) =>
          // Use HttpClient to make the call
          this.httpClient.get(
            encodeURI(`https://pileatedapps.us.auth0.com/api/v2/users/${user?.sub}`)
          )
        ),
        map((user: User) => user )
      )
  }
}
