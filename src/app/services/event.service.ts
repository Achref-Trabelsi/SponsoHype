import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../Globals/variables';
import { Observable, of, } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventUrl = BASE_URL + '/projets'
  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
     let res = this.http
      .get(this.eventUrl)
      .pipe(map((data : any) => { return data.projets}))
      return res;
  }

}
