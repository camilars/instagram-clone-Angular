import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

type Imagem = {
  estado: string;
  url: string;
};

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state(
        'escondido',
        style({
          opacity: 0,
        })
      ),
      state(
        'visivel',
        style({
          opacity: 1,
        })
      ),
      transition('escondido <=> visivel', animate('1s ease-in')),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  estado = 'visivel';

  imagens: Imagem[] = [
    { estado: 'visivel', url: 'assets/img_1.png' },
    { estado: 'escondido', url: 'assets/img_2.png' },
    { estado: 'escondido', url: 'assets/img_3.png' },
    { estado: 'escondido', url: 'assets/img_4.png' },
    { estado: 'escondido', url: 'assets/img_5.png' },
  ];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => this.rotateImagem(), 3000);
  }

  rotateImagem() {
    let idx: number;

    for (let i = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';

        idx = i === 4 ? 0 : i + 1;
        break;
      }
    }

    this.imagens[idx].estado = 'visivel';
    setTimeout(() => this.rotateImagem(), 3000);
  }
}
