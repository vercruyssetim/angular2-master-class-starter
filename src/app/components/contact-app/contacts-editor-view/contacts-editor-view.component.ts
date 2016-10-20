import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../../../services/contacts.service";
import {Contact} from "../../../models/contact";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'trm-contacts-editor-view',
  templateUrl: './contacts-editor-view.component.html',
  styleUrls: ['./contacts-editor-view.component.css']
})
export class ContactsEditorViewComponent implements OnInit {
  contact: Contact = <Contact>{address:{}};

  constructor(private contactService: ContactsService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    let contactId = this.activatedRoute.snapshot.params['id'];
    this.contactService.getContact(contactId).subscribe(contact => this.contact = contact);
  }

  save(contact: Contact){
    this.contactService.updateContact(contact)
      .subscribe(contact => this.router.navigate(['/contact', this.contact.id]));
  }

  cancel(contact: Contact){
    this.router.navigate(['/contact', this.contact.id]);
  }

}
