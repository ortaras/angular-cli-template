import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './landing.component';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		CommonModule
	],
	declarations: [
		LandingComponent
	]
})
export class LandingModule { }
