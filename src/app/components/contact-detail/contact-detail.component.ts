import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "../../models/contact";
import {ContactsService} from "../../services/contacts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
}
