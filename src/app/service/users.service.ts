import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { LDAP_USERS } from '../model/ldap-mock-data';
import { UserLdap } from '../model/user-ldap';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  users: UserLdap[] = LDAP_USERS;
  getUsers(): Observable<UserLdap[]> {
    return of(this.users);
  }

  getUser(login: string): Observable<UserLdap> {
    return of(this.users.find((user) => user.login === login));
  }
}
