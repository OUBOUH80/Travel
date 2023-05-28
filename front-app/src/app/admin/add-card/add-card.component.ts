import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/entities/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {



  card: Card= new Card();
  message: string;
  selectedFile: File;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
   
  }


  onSubmit(data){
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile,this.selectedFile.name);
    this.card.title=data.title;
    this.card.description=data.desc;

    console.log("Title :"+ this.card.title);
    console.log("Description :"+  this.card.description);
   // this.card.image=uploadImageData;
  
   this.cardService.createCard(this.card,this.selectedFile).subscribe( data =>{
      console.log(data);
     
    },
    error => {console.log(error);

      if (error.status== 200){

        alert('Your new City has been successfully added ;)')
      }
    
    });



    
  //  console.log(this.card);
   //this.saveCard();
    
   /* this.cardService.uploadImage(uploadImageData).subscribe((response) => {
   if (response.status=== 200) {
      this.message = 'Image uploaded successfully';
    } else {
      this.message = 'Image not uploaded successfully';
    }
    console.log(response);*/

  }
    
 
  }


  
  



















