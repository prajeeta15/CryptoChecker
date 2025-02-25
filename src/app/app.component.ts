import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency: Observable<string>;
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private currencyService: CurrencyService) {
    this.selectedCurrency = this.currencyService.getCurrency();
  }

  sendCurrency(currency: string): void {
    this.isLoading.next(true); // Show loading spinner
    this.currencyService.setCurrency(currency);
    
    // Simulate API fetch delay
    setTimeout(() => {
      this.isLoading.next(false); // Hide loading spinner after API fetch
    }, 1000);
  }
}
