import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PopupsComponent } from "./popups.component";
import { SuccessPopupComponent } from "./success-popup/success-popup.component";
import { PopupsService } from "./popups-shared/popups.service";
import { ErrorPopupComponent } from "./error-popup/error-popup.component";

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
	],
	declarations: [
		PopupsComponent,
		SuccessPopupComponent,
		ErrorPopupComponent
	],
	exports: [
		PopupsComponent
	],
	providers: [
		PopupsService
	],
	bootstrap: [
	]
})


export class PopupsModule { }
