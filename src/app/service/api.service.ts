import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// Define interfaces for API response (Can be extended)
export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = environment.apiUrl; 
  private CACHE_DURATION = 60000;
  private cache: Map<string, { timestamp: number; data: Observable<any> }> = new Map();

  constructor(private http: HttpClient) {}

  private fetchData<T>(url: string): Observable<T> {
    const cachedResponse = this.cache.get(url);

    if (cachedResponse && Date.now() - cachedResponse.timestamp < this.CACHE_DURATION) {
      return cachedResponse.data;
    }

    const request = this.http.get<T>(url).pipe(
      shareReplay(1), 
      catchError(this.handleError) 
    );

    this.cache.set(url, { timestamp: Date.now(), data: request });
    return request;
  }

  getCurrency(currency: string): Observable<CryptoData[]> {
    return this.fetchData<CryptoData[]>(`${this.BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }

  getTrendingCurrency(currency: string): Observable<CryptoData[]> {
    return this.fetchData<CryptoData[]>(`${this.BASE_URL}/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }

  getGraphicalCurrencyData(coinId: string, currency: string, days: number): Observable<any> {
    return this.fetchData<any>(`${this.BASE_URL}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`);
  }

  getCurrencyById(coinId: string): Observable<any> {
    return this.fetchData<any>(`${this.BASE_URL}/coins/${coinId}`);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => new Error('Failed to fetch data. Please try again later.'));
  }
}
