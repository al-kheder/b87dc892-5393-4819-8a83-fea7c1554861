import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getAllEvents(country:string,city:string) {
    return this.http.get(
      `https://tlv-events-app.herokuapp.com/events/${country}/${city}`
    );
  }
}
