import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../entities/card';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  private baseURL = "http://localhost:8080/travel/cards";

  constructor(private httpClient: HttpClient) { }


  getCards(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(`${this.baseURL}`);
  }

 /* createCard(uploadImageData: FormData,card: Card): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, {uploadImageData,card});
  }*/

  getCradById(id: number): Observable<Card>{
    return this.httpClient.get<Card>(`${this.baseURL}/${id}`);
  }

  getImageById(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/getImage/${id}`);
  }

  updateCard(id: number, card: Card): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}${id}`, card);
  }

  deleteCard(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

 /* uploadImage(uploadImageData: FormData): Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,uploadImageData);

  }*/



  createCard(card: Card, file: any): Observable<any> 
  {
   
    const mData = JSON.stringify(card);
    const formData = new FormData();
    formData.append('data', mData);
    if (file) {
      formData.append('file', file, file.name);
    }
    return this.httpClient.post(`${this.baseURL}`, formData);
  }

}
