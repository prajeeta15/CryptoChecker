import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getCurrency(currency: string) {
    return this.http.get<any>(`${this.apiUrl}/currency?vs_currency=${currency}`);
  }

  getTrendingCurrency(currency: string) {
    return this.http.get<any>(`${this.apiUrl}/trending?vs_currency=${currency}`);
  }

  getGraphicalCurrencyData(coinId: string, currency: string, days: number) {
    return this.http.get<any>(`${this.apiUrl}/graphical/${coinId}?vs_currency=${currency}&days=${days}`);
  }

  getCurrencyById(coinId: string) {
    return this.http.get<any>(`${this.apiUrl}/coin/${coinId}`);
  }
}
