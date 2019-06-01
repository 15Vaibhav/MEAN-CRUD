import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../service/contact.service';
import {Contact} from '../../models/models'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  firstName:string;
  lastName:string;
  phoneNo:string;
  constructor(private service:ContactService) { }

  ngOnInit() {
    this.service.getContact().subscribe(contact=>
      this.contacts = <any>contact
    )
  }

  deleteContact(id){
    console.log('id...',id)
    var contacts:any = this.contacts
    this.service.deleteContact(id).subscribe(data=>{
      if(data['n']==1){
       for(let i=0;i<contacts.length;i++){
         if(contacts[i]._id==id){
           contacts.splice(i,1)
         }
       }
      }
    })
  }
  addContact(){
    const newContact ={
    firstName:this.firstName,
    lastName:this.lastName,
    phoneNo:this.phoneNo
    }

    this.service.addContact(newContact).subscribe(data=>{
      this.contacts.push(<any>data)
      this.firstName ='';
      this.lastName ='';
      this.phoneNo =''
      this.service.getContact().subscribe(contact=>
        this.contacts = <any>contact
      )
    })
    

  }

}
