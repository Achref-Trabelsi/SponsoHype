import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {
  projects: any;
  searchText : string;
  constructor(private service: EventService) {this.searchText = "" }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.service.getEvents()
    .subscribe(res => { console.log(res); this.projects = res});
  }

}
