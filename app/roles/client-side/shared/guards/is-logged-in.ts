import { Injectable } from '@angular/core';
import {
	CanActivate, Router,
	ActivatedRouteSnapshot,
	Route
} from '@angular/router';
import { UserModel } from "../models/user.model";
import { ClientGlobals } from "../client-globals/client-globals";
import { UserRole } from "../enums/userRole.enum";

@Injectable()
export class IsLoggedIn implements CanActivate {
	private _user: UserModel;

	constructor(private router: Router, private _globals: ClientGlobals) {
		this._globals.user.subscribe(user => this._user = user);
	}

	canActivate(route: ActivatedRouteSnapshot): boolean {
		return this._isLoggedIn();
	}

	private _isLoggedIn(): boolean {
		if (this._user !== null) {
			return true;
		}
		this.router.navigate(['/']);
		return false;
	}
}
