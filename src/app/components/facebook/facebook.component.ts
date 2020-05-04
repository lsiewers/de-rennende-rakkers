import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {
  wpBase = '/nieuw/wp-content/themes/ng-wp-theme-master/dist';

  constructor() { }

  ngOnInit() {
  }

}
