import { CurrencyService } from './service/currency.service';
import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // Improves performance by reducing unnecessary re-renders
})
export class AppComponent implements OnInit, OnDestroy {
  selectedCurrency$!: Observable<string>; // Using Observable instead of string
  private destroy$ = new Subject<void>(); // Used to clean up subscriptions

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    // Subscribe to currency changes and update the variable
    this.selectedCurrency$ = this.currencyService.getCurrency();
  }

  sendCurrency(currency: string): void {
    console.log(currency);
    this.currencyService.setCurrency(currency);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete(); // Ensures proper cleanup to prevent memory leaks
  }
}
