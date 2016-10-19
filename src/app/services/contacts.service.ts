import {Injectable} from '@angular/core';
import {CONTACT_DATA} from "../data/contact-data";
import {Contact} from "../models/contact";

@Injectable()
export class ContactsService {

  contacts: Array<Contact> = CONTACT_DATA;

  constructor() {
  }

  getContacts(): Array<Contact> {
    return this.contacts;
  }

  getContact(id: number | string): Contact {
    return this.contacts.find(contact => contact.id == id);
  }

  addView(id: number | string) {
    this.getContact(id).views++;
  }

  isNice() {
    return true;
  }
}
