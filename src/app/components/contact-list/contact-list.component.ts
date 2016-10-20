import {Component, OnInit} from '@angular/core';
import {Contact} from "../../models/contact";
import {ContactsService} from "../../services/contacts.service";
import {Subject, Observable} from "rxjs";

@Component({
  selector: 'trm-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<String>();

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.search(this.terms$);
  }

  search(term) {
    return this.contactService.search(term);
  }
}
