import { Component, Input, OnInit } from '@angular/core';
import { PopupsService } from "./popups-shared/popups.service";
import { SuccessPopupModel } from "./success-popup/success-popup-shared/success-popup.model";

@Component({
	moduleId: module.id,
	selector: 'popups',
	templateUrl: 'popups.component.html'
})
export class PopupsComponent implements OnInit {
	public successModel: SuccessPopupModel;
	public errorModel: SuccessPopupModel;

	constructor(private _service: PopupsService) { }

	ngOnInit() {
		this._service.success.subscribe(model => this.successModel = model);
		this._service.error.subscribe(model => this.errorModel = model);
	}
}
