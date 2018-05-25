import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[];
  newEvent: Event;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();

    this.newEvent = this.eventsService.getEmptyEvent();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe(data => {
      this.events = data;
    },
    error => console.log(error));
  }

  createEvent() {
    this.eventsService.saveEvent(this.newEvent).subscribe(
      event => this.events.push(event),
      error => console.log(error));

    this.newEvent = this.eventsService.getEmptyEvent();
  }

  deleteEvent(_id: any) {
    this.eventsService.deleteEvent(_id).subscribe(
      event => this.getEvents(),
      error => console.log(error));
  }

  makeEventDone(e: Event) {
    e.status = 'done';
    this.eventsService.saveEvent(e).subscribe(
      event => this.getEvents(),
      error => console.log(error));
  }
}
