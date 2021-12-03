import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sponsee-dash',
  templateUrl: './sponsee-dash.component.html',
  styleUrls: ['./sponsee-dash.component.css']
})
export class SponseeDashComponent implements OnInit {

  public imageUrl: string;

  constructor(public router: Router, private route: ActivatedRoute) {
    this.imageUrl = 'assets/Image/default.png';
  }

  ngOnInit(): void {
  }

  sponseeLoggedin(): boolean {
    if (localStorage.getItem('role') === 'sponsee'){
      return true;
    }
    return false;
  }
}
