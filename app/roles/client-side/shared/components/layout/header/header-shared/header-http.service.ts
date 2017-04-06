import { Injectable } from '@angular/core';
import { HttpService } from './../../../../services/http.service';
import { MockRequestUrls } from './../../../../interceptor/mock-backend-interceptor/mock-request-urls';

@Injectable()
export class HeaderHttpService {
	constructor(private _http: HttpService) { }

	getLanguages() {
		return this._http.get(MockRequestUrls.urls.languages)
			.map(res => res.json());
	}
}
