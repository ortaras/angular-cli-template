import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ClientSideModule } from './roles/client-side/modules/client-side.module';

import { AppComponent } from "./app.component";
import { appRouting } from './app.routing';
import { HttpModule } from "@angular/http";


@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		CommonModule,
		appRouting,
		ClientSideModule,
		HttpModule
	],
	declarations: [
		AppComponent
	],
	exports: [
	],
	providers: [
	],
	bootstrap: [
		AppComponent
	]
})


export class AppModule { }
