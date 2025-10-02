import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars3BottomRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  providers: [provideIcons({ heroBars3BottomRight })],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
