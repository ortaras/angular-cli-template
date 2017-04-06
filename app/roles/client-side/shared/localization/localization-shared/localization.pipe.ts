import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from "./localization.service";

@Pipe({
	name: 'localize',
	pure: false // impure pipe, update value when we change language
})

export class LocalizationPipe implements PipeTransform {

	constructor(private _localize: LocalizationService) { }

	transform(value: string, args: string | string[]): any {
		if (!value) { return; }

		return this._localize.instant(value, args);
	}
}
