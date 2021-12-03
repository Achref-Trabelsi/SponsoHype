import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sponsoFront';
  noFooter = [
    '/sponsee-dashboard/create-event',
    '/login',
    '/sign-up',
    '/sign-up-sponsee',
    '/step-three',
    '/step-four'
  ];

  noNavbar = [
    '/sign-up-sponsee',
    '/step-one',
    '/step-two',
    '/step-three',
    '/step-four'
  ];
  constructor(public router: Router) {
  }

  has_footer(): boolean{
    return this.has_layout(this.noFooter);
  }

  has_navbar(): boolean{
    return this.has_layout(this.noNavbar);
  }

  has_layout(routes: string[]): boolean{
    const current = this.router.url;
    for (const route of routes){
      if (route === current) {
        return false;
      }
    }
    return true;
  }
}
