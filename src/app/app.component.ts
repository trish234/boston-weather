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
  weather : any;
  icon : any;
  temp : any;

  ngOnInit(){
    this.configService.getWeather().subscribe((data: (any)) =>{
      console.log(data);
      this.temp = data.main.temp;
      this.icon = "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";
    });
  }
}
