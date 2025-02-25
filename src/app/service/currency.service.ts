import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  
  private selectedCurrency$: BehaviorSubject<string>;

  constructor() {
    const savedCurrency = localStorage.getItem('selectedCurrency') || 'INR';
    this.selectedCurrency$ = new BehaviorSubject<string>(savedCurrency);
  }

  getCurrency(): Observable<string> {
    return this.selectedCurrency$.asObservable()
      .pipe(distinctUntilChanged(), shareReplay(1));
  }
  setCurrency(currency: string): void {
    if (currency && currency !== this.selectedCurrency$.value) {
      this.selectedCurrency$.next(currency);
      localStorage.setItem('selectedCurrency', currency);
    }
  }
}
