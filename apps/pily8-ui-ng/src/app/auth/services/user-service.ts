import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService, User } from '@auth0/auth0-angular';
import { concatMap, map, Observable, tap } from 'rxjs';
import { Pily8UserModel } from '../Pily8User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  public readonly auth: AuthService = inject(AuthService);

  getUser(): Observable<Pily8UserModel> {
    return this.auth.user$
      .pipe(
        concatMap((user: User | null | undefined) => {
            return this.httpClient.get<User>(
              encodeURI(`https://pileatedapps.us.auth0.com/api/v2/users/${user?.sub}`)
            ).pipe(
              map((user: User | any) => {
                return {
                  givenName: user.given_name,
                  familyName: user.family_name,
                  name: user.name,
                  nickname: user.nickname,
                  email: user.email,
                  emailVerified: user.email_verified,
                  user_id: user.user_id,
                  roles: user.app_metadata.roles,
                  userMetaData: user.user_metadata
                }
              })
            )
        }),
        tap((user: Pily8UserModel) => {console.log(user)}),
        map((user: Pily8UserModel) => user )
      )
  }
}
