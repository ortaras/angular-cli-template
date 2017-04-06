import { authentificationRoutes } from './authentification/authentification.routing';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideComponent } from './client-side.component';
import { LandingComponent } from './landing/landing.component';
import { landingRoutes } from './landing/landing.routing';
import { userRoutes } from "./user/user.routing";

export const clientSideRoutes: Routes = [{
	path: '',
	component: ClientSideComponent,
	children: [
		...landingRoutes,
		...authentificationRoutes,
		...userRoutes
	]
}];

export const appRoutingProviders: any[] = [];
export const clientSideRouting: ModuleWithProviders = RouterModule.forChild(clientSideRoutes);
