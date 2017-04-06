import { Injectable } from '@angular/core';
import { MockRequestUrls } from './../../../shared/interceptor/mock-backend-interceptor/mock-request-urls';
import { HttpService } from './../../../shared/services/http.service';

@Injectable()
export class UserHttpService {
	constructor(private _http: HttpService) { }

	getList() {
		return this._http.get(MockRequestUrls.urls.userList)
			.map(res => res.json());
	}
}
