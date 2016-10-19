import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import {ContactsService} from "./services/contacts.service";
import {ContactsFooterComponent} from "./contacts-footer/contacts-footer.component";

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsFooterComponent],
  imports: [BrowserModule],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService]
})
export class ContactsModule {

}
