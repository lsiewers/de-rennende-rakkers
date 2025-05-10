import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-facebook',
    templateUrl: './facebook.component.html',
    styleUrls: ['./facebook.component.scss'],
    standalone: false
})
export class FacebookComponent implements OnInit {
  wpBase = environment.wpBase;

  constructor() { }

  ngOnInit() {
  }

}
