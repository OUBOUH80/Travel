import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/entities/card';
import { CardService } from 'src/app/services/card.service';
import { explainerAnim, listAnimation } from '../animation';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    listAnimation,
    explainerAnim
]
})
export class CardComponent implements OnInit {
  
  cards: Card[];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imgUrl: any;

  constructor( private cardService: CardService) { }

  ngOnInit(): void {
 
    this.getCardsList();

  }

  getCardsList(){
    this.cardService.getCards().subscribe(data => {
      this.cards = data;

      data.map(a =>{
        this.cardService.getImageById(a.id).subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            a.image=   this.retrievedImage 
          
          }
        );
  
      })




    });
    

    /*  this.cardService.getImageById(1).subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;



    });*/

  /*  this.cards.map(a =>{
      this.cardService.getImageById(a.id).subscribe(
        res => {
          this.retrieveResonse = res.getImage;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );

    })*/

  

    
  }



 


}
