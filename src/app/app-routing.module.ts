import { TechnologyPageComponent } from './Components/technology-page/technology-page.component';
import { CrewPageComponent } from './Components/crew-page/crew-page.component';
import { DestinationPageComponent } from './Components/destination-page/destination-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'destination', component: DestinationPageComponent },
  { path: 'crew', component: CrewPageComponent },
  { path: 'technology', component: TechnologyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
