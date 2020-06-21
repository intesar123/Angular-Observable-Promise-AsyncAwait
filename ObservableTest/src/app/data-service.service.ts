import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './models/weather'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getWeatherData():Observable<Weather[]>{
   return this.http.get<Weather[]>("https://localhost:5001/weatherforecast");
  }

  async getWeatherDataSync():Promise<Weather[]>{
    return await  this.http.get<Weather[]>("https://localhost:5001/weatherforecast").toPromise();
   }
   
  
}
