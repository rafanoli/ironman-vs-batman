import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { NgGoogleAnalyticsTracker } from 'ng-google-analytics';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  imgCard: any = 'ironman-vs-batman';
  personagemSelecionado: string = '';
  animate: any = '';
  animatePage: any = 'animated zoomIn';
  selected: boolean = false;

  constructor(private router: Router, public googleAnalyticsService: NgGoogleAnalyticsTracker) { }

  ngOnInit() {
  }

  opcaoSelecionada(event) {

    this.animate = 'animated zoomOut';
    this.selected = true;

    setTimeout(() => {
      switch (event.target.value) {
        case 'ironman':
          this.imgCard = 'ironman';
          this.personagemSelecionado = 'Iron Man';
          this.animate = 'animated zoomInUp';
          break;
        case 'batman':
          this.imgCard = 'batman';
          this.personagemSelecionado = 'Batman';
          this.animate = 'animated zoomInUp';
          break;
      }
    }, 500)

  }

  votar() {
    this.googleAnalyticsService.eventEmitter("Personagem Selecionado", this.personagemSelecionado);
    this.animatePage = 'animated zoomOut';
    setTimeout(() => {
      this.router.navigate(['feedback'], { state: { personagem: this.personagemSelecionado } });
    }, 800);

  }

}
