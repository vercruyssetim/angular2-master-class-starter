import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ContactsAppRoutes} from "./app.routes";
import { ContactsAppComponent } from './components/contact-main/contacts.component';
import { ContactsHeaderComponent } from './components/contacts-header/contacts-header.component';
import {ContactsFooterComponent} from "./components/contacts-footer/contacts-footer.component";
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {ContactsService} from "./services/contacts.service";

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsFooterComponent, ContactListComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes)],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService]
})
export class ContactsModule {

}
