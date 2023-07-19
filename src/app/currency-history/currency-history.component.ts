import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-currency-history',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './currency-history.component.html',
  styleUrls: ['./currency-history.component.scss']
})
export class CurrencyHistoryComponent {

}
