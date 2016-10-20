import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ContactsAppRoutes} from "./app.routes";
import {
  ContactsAppComponent,
  ContactListComponent,
  ContactsHeaderComponent,
  ContactsFooterComponent,
  ContactDetailComponent,
  ContactsDetailViewComponent,
  ContactsEditorComponent,
  ContactsEditorViewComponent
} from "./components";
import {ContactsService} from "./services/contacts.service";
import {HttpModule} from "@angular/http";
import "rxjs/add/operator/map";
import {FormsModule} from "@angular/forms";
import {DEFAULT_CONFIG} from "./config/app.config";
import {APP_CONFIG} from "./app.tokens";

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsFooterComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactsDetailViewComponent,
    ContactsEditorComponent,
    ContactsEditorViewComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes), HttpModule, FormsModule],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService, {
    provide: APP_CONFIG, useValue: DEFAULT_CONFIG
  }]
})
export class ContactsModule {

}

