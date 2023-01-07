import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from './app.service';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
  animations: [
    trigger('fade', [
        transition('void => *', [
            style({opacity: 0}),
            animate('600ms cubic-bezier(0.215, 0.610, 0.355, 1)')
        ]),
        transition('* => void', [
            animate('400ms ease-out', style({opacity: 1}))
        ])
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  loading;
  wpBase = environment.wpBase;

  constructor(
      private router: Router
  ) {
      this.loading = true;
  }

  ngAfterViewInit() {
      this.router.events
          .subscribe((event) => {
              if (event instanceof NavigationStart) {
                this.loading = true;
              } else if (
                event instanceof NavigationEnd ||
                event instanceof NavigationCancel
              ) {
                this.loading = false;
              }
          });
  }
}
