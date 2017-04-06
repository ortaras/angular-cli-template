import { ControlsModule } from './../controls/controls.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		RouterModule,
		ControlsModule
	],
	declarations: [
		HeaderComponent
	],
	exports: [
		HeaderComponent
	],
	providers: [
	],
	bootstrap: [
	]
})


export class LayoutModule { }
