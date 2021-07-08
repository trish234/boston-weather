import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class ConfigService {

    apiKey: string;

    constructor(private http: HttpClient){
        this.apiKey = environment.API_KEY;
    }

    public getWeather(){
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid=${this.apiKey}`);
    }


}