import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheckBadgeSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, NgIcon],
  providers: [provideIcons({heroCheckBadgeSolid})],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
