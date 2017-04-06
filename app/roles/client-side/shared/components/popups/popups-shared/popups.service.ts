import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SuccessPopupModel } from "../success-popup/success-popup-shared/success-popup.model";
import { ErrorPopupModel } from "../error-popup/error-popup-shared/error-popup.model";

@Injectable()
export class PopupsService {
	public success: BehaviorSubject<SuccessPopupModel>;
	public error: BehaviorSubject<SuccessPopupModel>;

	constructor() {
		this.success = new BehaviorSubject<SuccessPopupModel>(null);
		this.error = new BehaviorSubject<ErrorPopupModel>(null);
	}

	open(model: SuccessPopupModel) {
		if (model instanceof SuccessPopupModel) {
			this.success.next(model);
		} else if (model instanceof ErrorPopupModel) {
			this.error.next(model);
		}
	}

	close(model: SuccessPopupModel) {
		if (model instanceof SuccessPopupModel) {
			this.success.next(null);
		} else if (model instanceof ErrorPopupModel) {
			this.error.next(null);
		}
	}
}
