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

  constructor(private contactService: ContactsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    let contactId = this.activatedRoute.snapshot.params['id'];
    this.contact = this.contactService.getContact(contactId);
    this.contactService.addView(contactId);
  }
}
