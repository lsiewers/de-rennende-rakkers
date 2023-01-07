import { Component, Input, AfterViewInit} from '@angular/core';
import { Header } from 'app/models/header';
import { trigger , style, transition, animate } from '@angular/animations';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade', [
        transition(':enter', [
            style({opacity: 0}),
            animate('600ms cubic-bezier(0.215, 0.610, 0.355, 1)')
        ]),
        transition(':leave', [
            animate('400ms ease-out', style({opacity: 1}))
        ]),
    ])
  ]
})
export class HeaderComponent implements AfterViewInit {
  @Input() header: Header;
  inView = true;
  isLoaded = false;
  wpBase = environment.wpBase;

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  playVideo(e) {
    e.target.muted = true;
    this.isLoaded = true;
    if (this.inView) {
      e.target.play();
    } else if (!e.target.paused) {
      e.target.stop();
    }
  }
}
