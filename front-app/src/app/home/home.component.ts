import { Component, OnInit } from '@angular/core';
import {listAnimation, explainerAnim } from './animation';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    listAnimation,
    explainerAnim
],
})


export class HomeComponent implements OnInit {

 // items :CardComponent[]= [];

  constructor() { // private card: CardComponent
  // this.items = [this.card];
  }

  ngOnInit(): void {
   //this.items.push();
  }

}
