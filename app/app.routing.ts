import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { clientSideRoutes } from './roles/client-side/modules/client-side.routing';

const appRoutes: Routes = [
	...clientSideRoutes
];

export const appRoutingProviders: any[] = [];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });
