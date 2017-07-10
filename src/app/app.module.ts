import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { routing } from './app.routing';
import { FreeStuffComponent } from './free-stuff/free-stuff.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForSalePanelComponent } from './for-sale-panel/for-sale-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ForSaleComponent,
    FreeStuffComponent,
    HomePageComponent,
    ForSalePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
