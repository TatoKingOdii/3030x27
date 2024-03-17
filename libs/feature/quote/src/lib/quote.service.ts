import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>('https://animechan.xyz/api/random');
  }
}
