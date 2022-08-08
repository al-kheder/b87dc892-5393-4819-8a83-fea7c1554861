import { CdkVirtualForOf } from '@angular/cdk/scrolling';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _countrySource = new Subject<string>();
  country$ = this._countrySource.asObservable();
  private _citySource = new Subject<string>();
  city$ = this._citySource.asObservable();
  constructor() { }

  sendCountry(country:string){
    this._countrySource.next(country)
  }
  sendCity(city:string,){
    this._citySource.next(city);
  }
}
