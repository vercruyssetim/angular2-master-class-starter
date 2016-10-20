import { Component, OnInit } from '@angular/core';
import {Contact} from "../../../models/contact";
import {ContactsService} from "../../../services/contacts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'trm-contact-creator',
  templateUrl: './contact-creator.component.html',
  styleUrls: ['./contact-creator.component.css']
})
export class ContactCreatorComponent implements OnInit {

  constructor(private contactsService:ContactsService, private router: Router) { }

  ngOnInit() {
  }

  submit(contact: Contact){
    this.contactsService.addContact(contact)
      .subscribe(contact => this.router.navigate(['/contacts']));
  }

}
