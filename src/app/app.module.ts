import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
