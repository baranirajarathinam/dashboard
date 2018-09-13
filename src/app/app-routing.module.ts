import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { StatusComponent }  from './status/status.component';
import { RecordedComponent }  from './recorded/recorded.component';
import { SetupComponent }  from './setup/setup.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'pref', component: HeroesComponent },
  { path: 'status', component: StatusComponent },
  { path: 'recorded', component: RecordedComponent },
  { path: 'setup', component: SetupComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

