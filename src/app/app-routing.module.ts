import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleAnalyticsService } from "./services/google-analytics.service";

import { BattleComponent } from './pages/battle/battle.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'battle', pathMatch: 'full' },
  { path: 'battle', component: BattleComponent },
  { path: 'feedback', component: FeedbackComponent }
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    GoogleAnalyticsService
  ]
})
export class AppRoutingModule {
  
  constructor(protected _googleAnalyticsService: GoogleAnalyticsService) { }
}
