import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { users } from '../user/mockUsers';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedUser = new BehaviorSubject<User>(undefined);

  get IsLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get LoggedUser() {
    return this.loggedUser.asObservable();
  }

  constructor(private router: Router) {}

  login(input: User) {
    let user = users.find(
      (x) => x.name === input.name && x.password === input.password
    );
    if (user === undefined) {
      this.loggedIn.next(false);
    } else {
      this.loggedUser.next(user);
      this.loggedIn.next(true);
      this.router.navigate(['']);
    }
  }
}
