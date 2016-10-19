import {Component} from '@angular/core';
import {CONTACT_DATA} from './data/contact-data';
import {Contact} from "./models/contact";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  contacts: Array<Contact> = CONTACT_DATA;
}
