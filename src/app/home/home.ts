import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Features } from "./features/features";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-home',
  imports: [Hero, Features, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

}