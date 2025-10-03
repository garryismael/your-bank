import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { OurProducts } from "../../components/our-products/our-products";

@Component({
  selector: 'app-home',
  imports: [Hero, OurProducts],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
