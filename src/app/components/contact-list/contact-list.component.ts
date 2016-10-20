import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";
import {ContactsService} from "../../services/contacts.service";
import {Subject} from "rxjs";

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Array<Contact>;
  private terms$ = new Subject<String>();

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
    this.terms$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));
  }

  search(term) {
    this.contactService.search(term)
      .subscribe(contacts => this.contacts = contacts);
  }
}
