import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-products',
  imports: [NgOptimizedImage],
  templateUrl: './our-products.html',
  styleUrl: './our-products.css',
})
export class OurProducts {
  products = [
    {
      id: 1,
      icon: '/images/briefcase.svg',
      title: 'Checking Accounts',
      description:
        'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.',
    },
    {
      id: 2,
      icon: '/images/archive.svg',
      title: 'Savings Accounts',
      description:
        "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
    },
    {
      id: 3,
      icon: '/images/loan.svg',
      title: 'Loans and Mortgages',
      description:
        'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.',
    },
  ];
}
