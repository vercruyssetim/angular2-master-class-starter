import { Component, OnInit } from '@angular/core';
import {Contact} from "../../models/contact";
import {ContactsService} from "../../services/contacts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  isOk: string;

  constructor(private contactService: ContactsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    let contactId = this.activatedRoute.snapshot.params['id'];
    this.contactService.getContact(contactId).subscribe(contact => {
      this.contact = contact;
      this.contact.views++;
      this.contactService.updateContact(this.contact)
        .subscribe(contact => this.contact = contact);
    });

  }
}
