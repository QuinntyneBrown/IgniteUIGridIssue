import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterPageComponent } from './master-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RegionsPageComponent } from './regions/regions-page.component';
import { StandAloneRegionsPageComponent } from './regions/stand-alone-regions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    RegionsPageComponent,
    StandAloneRegionsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
