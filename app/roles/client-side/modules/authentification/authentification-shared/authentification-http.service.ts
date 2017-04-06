import { SignUpModel } from './../sign-up/sign-up-shared/sign-up.model';
import { Injectable } from '@angular/core';
import { MockRequestUrls } from './../../../shared/interceptor/mock-backend-interceptor/mock-request-urls';
import { SignInModel } from './../sign-in/sign-in-shared/sign-in.model';
import { HttpService } from './../../../shared/services/http.service';

@Injectable()
export class AuthentificationHttpService {
	constructor(private _http: HttpService) { }

	signup(data: SignUpModel) {
		return this._http.post(MockRequestUrls.urls.signup, data)
			.map(res => res.json());
	}

	signin(data: SignInModel) {
		return this._http.post(MockRequestUrls.urls.signin, data)
			.map(res => res.json());
	}
}
