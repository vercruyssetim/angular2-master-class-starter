import {Injectable, Inject} from "@angular/core";
import {CONTACT_DATA} from "../data/contact-data";
import {Contact} from "../models/contact";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {ContactBuilder} from "../models/contactBuilder";
import {APP_CONFIG} from "../app.tokens";

@Injectable()
export class ContactsService {

  contacts: Array<Contact> = CONTACT_DATA;

  constructor(private http: Http, @Inject(APP_CONFIG) private appConfig) {
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get(this.appConfig.apiEndpoint + '/api/contacts')
      .map(res => res.json())
      .map(data => this.mapToContacts(data.items));
  }

  getContact(id: number | string): Observable<Contact> {
    return this.http.get(`${this.appConfig.apiEndpoint}/api/contacts/${id}`)
      .map(res => res.json())
      .map(data => this.mapToContact(data.item));
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put(`${this.appConfig.apiEndpoint}/api/contacts/${contact.id}`, contact)
      .map(res => res.json())
      .map(data => this.mapToContact(data.item));
  }

  search(terms$: Observable<String>): Observable<Array<Contact>>{
    return terms$
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawSearch(term))
      .merge(this.getContacts());
  }

  rawSearch(term: String): Observable<Array<Contact>> {
    return this.http.get(`http://localhost:4201/api/search?text=${term}`)
      .map(res => res.json())
      .map(data => this.mapToContacts(data.items))
  }

  mapToContacts(contacts: Array<Contact>): Array<Contact> {
    return contacts.map(contact => this.mapToContact(contact));
  }

  mapToContact(contact: Contact): Contact {
    return ContactBuilder.aContactBuilder()
      .withId(contact.id)
      .withName(contact.name)
      .withEmail(contact.email)
      .withPhone(contact.phone)
      .withBirthday(contact.birthday)
      .withWebsite(contact.website)
      .withImage(contact.image)
      .withStreet(contact.address.street)
      .withZip(contact.address.zip)
      .withCity(contact.address.city)
      .withCountry(contact.address.country)
      .withViews(contact.views)
      .build()
  }

  isNice() {
    return true;
  }
}
