import { ErrorPopupModel } from './../../components/popups/error-popup/error-popup-shared/error-popup.model';
import { RequestOptions, Request } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { PopupsService } from './../../components/popups/popups-shared/popups.service';

@Injectable()
export class InterceptorService {
	constructor(
		private _router: Router,
		private _popupService: PopupsService) {
	}

	makeRequestOptions(request: Request): RequestOptions {
		return new RequestOptions({
			method: request.method,
			headers: request.headers,
			body: request.getBody(),
			url: request.url,
			withCredentials: request.withCredentials,
			responseType: request.responseType
		});
	}

	processErrors(error): void {
		if (error.status === 400) {
			this._popupService.open(new ErrorPopupModel(`Error ${error.status}.`, 'Error'));
			return;
		}
		if (error.status === 401) {
			this._popupService.open(new ErrorPopupModel(`Error ${error.status}.`, 'Error'));
			this._router.navigate(['/sign-in']);
			return;
		}
		if (error.status === 404) {
			this._popupService.open(new ErrorPopupModel(`Error ${error.status}.`, 'Error'));
			return;
		}
		if (error.status === 500) {
			this._popupService.open(new ErrorPopupModel(`Error ${error.status}.`, 'Error'));
			return;
		}
		this._popupService.open(new ErrorPopupModel(`Error ${error.status}.`, 'Error'));
	}
}