import { Component, OnInit } from '@angular/core';
import {ConfigService} from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'boston-weather';

  constructor(private configService: ConfigService) {}
  //TODO type variables
  weather : any;
  icon : any;
  temp : any;
  adjective : any;

  ngOnInit(){
    this.configService.getWeather().subscribe((data: (any)) =>{
      console.log(data);
      this.temp = Math.round(data.main.temp);
      this.icon = "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";
      
      if (this.temp >= 85){
        this.adjective = "a bit hot";
      } else if (this.temp <= 40){
        this.adjective =  "a bit cold";
      } else {
        this.adjective = "lovely";
      }
    });
  }
}
