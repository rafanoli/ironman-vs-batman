import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';

import { BattleComponent } from './pages/battle/battle.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'battle', pathMatch: 'full' },
  { path: 'battle', component: BattleComponent },
  { path: 'feedback', component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    NgGoogleAnalyticsTracker
  ]
})

export class AppRoutingModule {
  
  constructor(public googleAnalyticsService: NgGoogleAnalyticsTracker) { }
  
}
