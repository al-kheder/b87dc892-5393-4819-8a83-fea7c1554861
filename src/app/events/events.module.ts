import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './components/event/event.component';
import { ControllerModule } from '../controller/controller.module';



@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule,ControllerModule
  ],
  exports:[
    EventComponent
  ]
})
export class EventsModule { }
