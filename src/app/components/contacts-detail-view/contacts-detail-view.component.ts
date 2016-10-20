import {Component, OnInit, Input} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";
import {Contact} from "../../models/contact";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  private contact: Contact;

  constructor(private router: Router, private contactService: ContactsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    let contactId = this.activatedRoute.snapshot.params['id'];
    this.contactService.getContact(contactId).subscribe(contact => {
      this.contact = contact;
      this.contact.views++;
      this.contactService.updateContact(this.contact)
        .subscribe(contact => this.contact = contact);
    });

  }
  navigateToEditor($event){
    this.router.navigate(['/contact', $event.id, 'edit']);
  }

  navigateToList(){
    this.router.navigate(['/contacts']);
  }

}
