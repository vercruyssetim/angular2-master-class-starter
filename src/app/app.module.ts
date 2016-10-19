import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ContactsAppRoutes} from "./app.routes";
import { ContactsAppComponent, ContactListComponent, ContactsHeaderComponent, ContactsFooterComponent, ContactDetailComponent } from './components';
import {ContactsService} from "./services/contacts.service";

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsFooterComponent, ContactListComponent, ContactDetailComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes)],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService]
})
export class ContactsModule {

}
