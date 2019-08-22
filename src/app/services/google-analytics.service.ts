import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

declare var ga: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(router: Router) {

    // if (!environment.production) return; // Se quiser habilitar somente em produção

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.url);
        ga('send', 'pageview');
      }
    });

  }


  //create our event emitter to send our data to Google Analytics
  public eventEmitter(eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

}
