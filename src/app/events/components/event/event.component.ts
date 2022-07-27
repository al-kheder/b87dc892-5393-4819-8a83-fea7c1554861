import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
   events:any[] = []
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }
 getEvents(){
  this.eventService.getAllEvents().subscribe( (res:any) => {
    this.events = res;
   console.log(res);
  })
 }
}
