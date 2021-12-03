import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../services/event.service";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
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
