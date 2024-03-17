import {Injectable} from '@angular/core';
import {DEFAULT_WEATHER, Weather} from "../weather";
import {HttpClient} from "@angular/common/http";
import {Endpoint, EndpointPaths} from "~challenge/types";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(EndpointPaths.get(Endpoint.WEATHER) + city)
      .pipe(catchError(() => of({...DEFAULT_WEATHER, name: city, desc: 'Failed to load weather!'}))
    );
  }
}
