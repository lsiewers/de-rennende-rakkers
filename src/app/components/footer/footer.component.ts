import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  currentYear;
  wpBase = environment.wpBase;

  constructor() { }

  ngOnInit() {
    this.currentYear = (new Date()).getFullYear();
  }

}
