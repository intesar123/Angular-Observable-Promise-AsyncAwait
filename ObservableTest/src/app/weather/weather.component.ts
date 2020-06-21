import { Component, OnInit } from '@angular/core';
import {Weather} from '../models/weather';
import {DataServiceService} from '../data-service.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weather: Weather[];
  constructor(private service :DataServiceService) { }

   ngOnInit(): void {

    this.getWeatherData();
    alert("Outer Message");
  }

  getWeatherData()
  {
    this.service.getWeatherData().subscribe(data=>this.weather=data);
    alert("observable");
  }

  // async getWeatherData()
  // {
  //   this.weather= await this.service.getWeatherDataSync();
  //   alert("Async Await");
  // }
 
  
  
}
