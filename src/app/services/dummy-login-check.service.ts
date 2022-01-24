import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyLoginCheckService {
  constructor() {}

  isLoggedIn() {
    return !(sessionStorage.getItem('activeUser') === null);
  }
}
