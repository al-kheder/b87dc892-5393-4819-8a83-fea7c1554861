import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './components/controller/controller.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ControllerComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,MatSelectModule, FormsModule,BrowserAnimationsModule
  ],
  exports:[
    ControllerComponent
  ]
})
export class ControllerModule { }
