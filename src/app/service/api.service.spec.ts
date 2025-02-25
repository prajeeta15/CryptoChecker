import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiBaseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensures that no unmatched requests are left
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch currency data', () => {
    const mockResponse = [{ id: 'bitcoin', name: 'Bitcoin', current_price: 50000 }];
    const currency = 'USD';

    service.getCurrency(currency).subscribe((data) => {
      expect(data.length).toBe(1);
      expect(data[0].id).toBe('bitcoin');
    });

    const req = httpMock.expectOne(`${apiUrl}/currency?vs_currency=${currency}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch graphical currency data', () => {
    const mockResponse = { prices: [[1622520000000, 50000]] };
    const coinId = 'bitcoin';
    const currency = 'USD';
    const days = 30;

    service.getGraphicalCurrencyData(coinId, currency, days).subscribe((data) => {
      expect(data.prices.length).toBe(1);
    });

    const req = httpMock.expectOne(`${apiUrl}/graphical/${coinId}?vs_currency=${currency}&days=${days}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should fetch currency by ID', () => {
    const mockResponse = { id: 'bitcoin', name: 'Bitcoin' };
    const coinId = 'bitcoin';

    service.getCurrencyById(coinId).subscribe((data) => {
      expect(data.id).toBe('bitcoin');
    });

    const req = httpMock.expectOne(`${apiUrl}/coin/${coinId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle errors gracefully', () => {
    const currency = 'USD';

    service.getCurrency(currency).subscribe(
      () => fail('Should have failed with a 500 error'),
      (error) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpMock.expectOne(`${apiUrl}/currency?vs_currency=${currency}`);
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });
});
