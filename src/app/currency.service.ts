import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentCurrencyRequest } from './current-currency-request';
import { Observable } from 'rxjs';
import { CurrentCurrencyResponse } from './current-currency-response';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  apiURL = 'http://localhost:8080/currencies';
  constructor(private http: HttpClient) { }

  testData: CurrentCurrencyRequest = {
    currency: 'GBP',
    name: 'Patryk Hajzer'
  }

  fetchCurrentCurrencyValue(): any {
    return this.http.post<CurrentCurrencyResponse>(this.apiURL + '/get-current-currency-value-command', this.testData).subscribe(
      (response) => {
        return {value: response.value, currency: this.testData.currency}
        console.log(response); // Przykład: Wyświetlenie danych w konsoli
        // Możesz przypisać dane do zmiennej lub wykonać inne operacje
      },
      (error) => {
        // Obsłuż błąd
        console.error(error); // Przykład: Wyświetlenie błędu w konsoli
      }
    )
  }
}
