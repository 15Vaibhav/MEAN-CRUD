import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';  // Import it up here
import {Contact} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContact(){
    return this.http.get('http://localhost:3000/api/contacts')
  }
  addContact(newContact){
    var headers = new HttpHeaders();
    headers.append('Content-Type','aplication/json')
    return this.http.post('http://localhost:3000/api/contact',newContact,{headers:headers})

  }
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contact/'+id)
  }
}
