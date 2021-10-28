import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { DestinationPageComponent } from './Components/destination-page/destination-page.component';
import { CrewPageComponent } from './Components/crew-page/crew-page.component';
import { TechnologyPageComponent } from './Components/technology-page/technology-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    DestinationPageComponent,
    CrewPageComponent,
    TechnologyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
