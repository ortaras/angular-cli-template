import { NgModule } from '@angular/core';
import { LOCALIZATION_PROVIDERS } from "./localization-shared/localization.config";
import { LocalizationPipe } from "./localization-shared/localization.pipe";
import { LocalizationService } from "./localization-shared/localization.service";

@NgModule({
	exports: [
		LocalizationPipe
	],
	declarations: [
		LocalizationPipe
	],
	providers: [
		LocalizationService,
		LOCALIZATION_PROVIDERS
	]
})
export class LocalizationModule { }
