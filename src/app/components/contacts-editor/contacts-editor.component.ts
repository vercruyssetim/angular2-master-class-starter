import {Component, OnInit} from "@angular/core";
import {Contact} from "../../models/contact";
import {ContactsService} from "../../services/contacts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
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
