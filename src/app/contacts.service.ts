import { Injectable } from '@angular/core';
import {CONTACT_DATA} from "./data/contact-data";
import {Contact} from "./models/contact";

@Injectable()
export class ContactsService {

  contacts: Array<Contact> = CONTACT_DATA;

  constructor() { }

  getContacts(): Array<Contact>{
    return this.contacts;
  }

  isNice() {
    return true;
  }
}
