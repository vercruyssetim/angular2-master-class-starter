import {BrowserModule} from "@angular/platform-browser";
import {NgModule, OpaqueToken} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ContactsAppRoutes} from "./app.routes";
import {
  ContactsAppComponent,
  ContactListComponent,
  ContactsHeaderComponent,
  ContactsFooterComponent,
  ContactDetailComponent,
  ContactsEditorComponent
} from "./components";
import {ContactsService} from "./services/contacts.service";
import {HttpModule} from "@angular/http";
import "rxjs/add/operator/map";
import {FormsModule} from "@angular/forms";
import {DEFAULT_CONFIG} from "./config/app.config";
import {APP_CONFIG} from "./app.tokens";
import {ContactsDetailViewComponent} from "./components/contacts-detail-view/contacts-detail-view.component";

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsFooterComponent,
    ContactsDetailViewComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactsEditorComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes), HttpModule, FormsModule],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService, {
    provide: APP_CONFIG, useValue: DEFAULT_CONFIG
  }]
})
export class ContactsModule {

}

