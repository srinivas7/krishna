import { Route } from '@angular/router';
import {SomeComponent} from './some/some.component';

export const routes: Route[] = [
  { path: 'home', pathMatch: 'full', redirectTo: 'weather'},
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'weather' },
  { path: '', component: SomeComponent }

];
