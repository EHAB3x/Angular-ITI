import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private authSubject: BehaviorSubject<boolean>;
  constructor() {
    this.authSubject = new BehaviorSubject<boolean>(false);
  }

  login() {
    localStorage.setItem('token', 'ihab123456789');
    this.getAuthSubject().next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.getAuthSubject().next(false);
  }

  getUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getAuthSubject(): BehaviorSubject<boolean> {
    return this.authSubject;
  }
}
