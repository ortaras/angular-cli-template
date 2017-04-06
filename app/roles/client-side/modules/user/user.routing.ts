import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { IsLoggedIn } from "../../shared/guards/is-logged-in";

export const userRoutes: Routes = [{
	path: '',
	component: UserComponent,
	children: [
		{ path: 'user-list', component: UserListComponent, canActivate: [IsLoggedIn] },
	]
}];

export const appRoutingProviders: any[] = [];
export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);
