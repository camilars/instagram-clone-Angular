import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css'],
  animations: [
    trigger('animate-banner', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(-50px, 0)',
        }),
        animate('500ms 0s ease-in-out'),
      ]),
    ]),
    trigger('animate-painel', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(50px, 0)',
        }),
        animate('500ms 0s ease-in-out'),
      ]),
    ]),
  ],
})
export class AccessComponent implements OnInit {
  estadoBanner = 'criado';
  estadoPainel = 'criado';
  cadastro = false;

  constructor() {}

  ngOnInit(): void {}

  exibirPainel(event: string) {
    this.cadastro = event === 'cadastro' ? true : false;
  }
}
