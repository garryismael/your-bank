import { CommonModule, CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowsRightLeft, heroPlus } from '@ng-icons/heroicons/outline';
import { heroCheckBadgeSolid } from '@ng-icons/heroicons/solid';
import { Transaction } from '../transaction/transaction';
import { MoneyExchange } from '../money-exchange/money-exchange';
import { faSolidDollarSign, faSolidEuroSign, faSolidBitcoinSign } from '@ng-icons/font-awesome/solid';
import { faBrandEthereum } from '@ng-icons/font-awesome/brands';
@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, NgIcon, CommonModule, Transaction, MoneyExchange],
  providers: [
    provideIcons({
      heroCheckBadgeSolid,
      heroPlus,
      heroArrowsRightLeft,
      faSolidDollarSign,
      faSolidEuroSign,
      faSolidBitcoinSign,
      faBrandEthereum,
    }),
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  transactions = [
    {
      id: 1,
      name: 'Joel Kenley',
      balance: -68.0,
      opacity: 1,
      padding: '8px 12px',
      paddingInner: '0',
      margin: '0',
      zIndex: 10,
      borderCls: 'border border-gray-shades-15 rounded-1.5',
    },
    {
      id: 2,
      name: 'Mark Smith',
      balance: -68.0,
      opacity: 0.5,
      padding: '0 10px',
      paddingInner: '8px 12px',
      margin: '-14px 0 -14px 0',
      zIndex: 5,
      borderCls: 'border border-gray-shades-15',
    },
    {
      id: 3,
      name: 'Lenen Roy',
      balance: -68.0,
      opacity: 0.2,
      padding: '0 20px',
      paddingInner: '8px 12px',
      margin: '0 0 -15px 0',
      zIndex: 1,
      borderCls: 'border border-none',
    },
  ];
}
