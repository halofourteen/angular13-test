import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SnackService } from '../services/snack.service';
import { DummyLoginCheckService } from '../services/dummy-login-check.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private snack: SnackService, private isUserLoggedIn: DummyLoginCheckService) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
	const isLoggedIn = this.isUserLoggedIn.isLoggedIn();
    if (!isLoggedIn) {
      this.snack.authError();
    }
    return isLoggedIn;
  }
}
