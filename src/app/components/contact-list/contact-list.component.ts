import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Contact>;

  constructor(private contactService: ContactsService){}

  ngOnInit(){
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }
}
