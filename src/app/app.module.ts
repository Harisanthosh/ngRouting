import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { RefreeComponent } from './refree/refree.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { UniversalGuardService } from './universal-guard.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    RefreeComponent,
    ScheduleComponent,
    SponsorsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [UniversalGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
