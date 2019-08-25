import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgGoogleAnalyticsModule } from 'ng-google-analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './pages/battle/battle.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGoogleAnalyticsModule.forRoot({ id: 'UA-146170808-1' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
