import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { FreeStuffComponent } from './free-stuff/free-stuff.component';

const appRoutes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path: 'for-sale',
    component: ForSaleComponent
  },
  {
    path: 'free-stuff',
    component: FreeStuffComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
