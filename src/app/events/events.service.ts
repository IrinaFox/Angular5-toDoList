import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get('http://localhost:8888/events');
  }
}
