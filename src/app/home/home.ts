import { Component } from '@angular/core';
import { Hero } from "./hero/hero";

@Component({
  selector: 'app-home',
  imports: [Hero],
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