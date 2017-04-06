import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserHttpService } from "./user-shared/user-http.service";

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		CommonModule,
		FormsModule
	],
	declarations: [
		UserComponent,
		UserListComponent
	],
	providers: [
		UserHttpService
	]
})
export class UserModule { }
