import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss']
})
export class CurrencyFormComponent {
  constructor(private currencyService: CurrencyService) {}
  email = new FormControl('', [Validators.required, Validators.email]);

  sendRequest(): void {
    console.log('wyslany');
    const result = this.currencyService.fetchCurrentCurrencyValue();
    console.log(result);
  }

}
