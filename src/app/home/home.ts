import { Component } from '@angular/core';
import { Carrousel } from "./carrousel/carrousel";

@Component({
  selector: 'app-home',
  imports: [Carrousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
