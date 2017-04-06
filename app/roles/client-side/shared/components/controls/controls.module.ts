import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from './input/input.component';
import { CustomSelectComponent } from "./select/select.component";
import { LocalizationModule } from "../../localization/localization.module";

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		LocalizationModule
	],
	declarations: [
		CustomInputComponent,
		CustomSelectComponent
	],
	exports: [
		CustomInputComponent,
		CustomSelectComponent
	],
	providers: [
	],
	bootstrap: [
	]
})


export class ControlsModule { }
