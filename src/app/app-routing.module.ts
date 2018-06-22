import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RefreeComponent } from './refree/refree.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { UniversalGuardService } from './universal-guard.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'players', pathMatch: 'full'
  },
  {
    path: 'schedule', component: ScheduleComponent
  },
  {
    path: 'players', component: PlayersComponent
  },
  {
    path: 'players/:name', component: PlayersComponent
  },
  {
    path: 'referee', component: RefreeComponent, canActivate:[UniversalGuardService]
  },
  {
    path: 'sponsor', component: SponsorsComponent
  },
  {
    path: '**', redirectTo: 'sponsor'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
