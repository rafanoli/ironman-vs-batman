import { Component, OnInit } from '@angular/core';
import { NgGoogleAnalyticsTracker } from './ng-google-analytics.service';

@Component({
  selector: 'lib-NgGoogleAnalytics',
  template: ``,
  styles: []
})
export class NgGoogleAnalyticsComponent implements OnInit {

  constructor(public googleAnalytics: NgGoogleAnalyticsTracker) { }

  ngOnInit() {
  }

}
