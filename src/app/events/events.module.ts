import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './components/event/event.component';



@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventComponent
  ]
})
export class EventsModule { }
