import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './components/location.component';
import { MapComponent } from './components/map.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'location/:user/:id', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
