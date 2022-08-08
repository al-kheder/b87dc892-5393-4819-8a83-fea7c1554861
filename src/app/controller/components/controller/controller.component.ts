import { Country } from './../../model/country';
import { Component, OnInit } from '@angular/core';
import { State } from '../../model/state';
import { City } from '../../model/city';
import { ControllerService } from '../../services/controller.service';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  listCountry!:Country[];
  countrySelected!:string;
  liststate!:State[];
  selectedState!:[];
  citySelected!:string

  constructor(private CountryService:ControllerService,private _ineractionService:SharedService) { }

  ngOnInit(): void {
    this.fetchAllCountry();
  }
  private fetchAllCountry(){
   this.CountryService.getCountry().subscribe(
     (data) => {
      this.listCountry = data;
     }
   )
  }
  onCountryselected(countryIso:any){
    this.CountryService.getCityOfselectedCountry(countryIso).subscribe(
       (data) => {
        this.liststate = data;
       }
    )
  }
  sendCountry(){
    this._ineractionService.sendCountry(this.countrySelected);
  }
  sendCity(){
    this._ineractionService.sendCity(this.citySelected);
  }

}
