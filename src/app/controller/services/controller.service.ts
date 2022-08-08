import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http:HttpClient) { }
  httpOption =  {
  headers:  new HttpHeaders({
    'content-type':'application/json',
    'X-CSCAPI-KEY':'a09HRmJwRkRHY3Q1dm85MlJOb1ZpZkV2am40NUppY1VnRnBHUFY3OQ=='
    })
  }

  getCountry():Observable<Country[]>{
    return this.http.get<Country[]>('https://api.countrystatecity.in/v1/countries',{headers:this.httpOption.headers})
  }
  getCityOfselectedCountry(countryIso:string):Observable<any>{
    return this.http.get(`https://api.countrystatecity.in/v1/countries/${countryIso}/states`,{headers:this.httpOption.headers});
  }
}
