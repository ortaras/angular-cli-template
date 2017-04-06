import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PopupsService } from "../popups-shared/popups.service";
import { SuccessPopupModel } from "./success-popup-shared/success-popup.model";

@Component({
	moduleId: module.id,
	selector: 'success-popup',
	templateUrl: 'success-popup.component.html',
	styleUrls: ['success-popup.component.css']
})
export class SuccessPopupComponent implements OnInit {
	public fading: boolean = false;
	@Input() model: SuccessPopupModel;

	constructor(private _service: PopupsService) { }

	ngOnInit() {
		setTimeout(() => {
			this.fading = true;
			setTimeout(() => this.closePopup(), 500);
		}, 1500);
	}

	private closePopup() {
		this._service.close(this.model);
	}
}