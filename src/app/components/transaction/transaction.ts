import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowsRightLeft } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-transaction',
  imports: [CommonModule, NgIcon, CurrencyPipe],
  providers: [provideIcons({ heroArrowsRightLeft })],
  templateUrl: './transaction.html',
  styleUrl: './transaction.css',
})
export class Transaction {
  name = input<string>();
  balance = input<number>();
  opacity = input<number>();
  padding = input<string>();
  paddingInner = input<string>();
  margin = input<string>();
  zIndex = input<number>();
}
