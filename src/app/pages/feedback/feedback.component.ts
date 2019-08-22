import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  personagemSelecionado: string = '';
  gif: string = '';

  constructor(private router: Router) {


    if (this.router.getCurrentNavigation().previousNavigation != null) {
      this.personagemSelecionado = this.router.getCurrentNavigation().extras.state.personagem;

      switch (this.personagemSelecionado) {
        case 'Iron Man':
          this.gif = 'ironmangif.gif';
          break;
        case 'Batman':
          this.gif = 'batmangif.webp';
          break;

      }
    } else {
      this.router.navigate(['battle']);
    }

  }

  ngOnInit() {
  }
  votarNovamente() {
    this.router.navigate(['battle']);
  }
}
