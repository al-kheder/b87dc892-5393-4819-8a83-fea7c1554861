import { ControllerComponent } from './../../../controller/components/controller/controller.component';
import { Component, OnInit,Input } from '@angular/core';
import { EventService } from '../../services/event.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  country:string = 'de';
  city:string = 'brelin';
   events:any[] = []
  constructor(private eventService:EventService,private _ineractionService:SharedService) { }

  ngOnInit(): void {
    this.getEvents();
    this._ineractionService.country$.subscribe();
  }
 getEvents(){
  this.eventService.getAllEvents('de','berlin').subscribe( (res:any) => {
    this.events = res;
  })
 }
}
