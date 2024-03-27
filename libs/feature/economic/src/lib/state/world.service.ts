import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {WorldLoc, WorldMetadata, WorldResponse} from "~challenge/economic";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http: HttpClient) { }

  getFreshWorld() {
    return this.getWorldPage(1);
  }

  getWorldPage(page: number): Observable<WorldResponse> {
    const params: HttpParams = new HttpParams()
      .set("format", 'json')
      .set('page', page)
      .set('per_page', 50);

    return this.http.get<[WorldMetadata, WorldLoc[]]>('https://api.worldbank.org/v2/country/', {params: params}).pipe(
      map(response => {
        return {metadata: response[0], worldLocs: response[1]} as WorldResponse
      })
    );
  }
}
