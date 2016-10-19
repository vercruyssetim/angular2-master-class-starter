import {ContactListComponent, ContactDetailComponent} from "./components";
import {Routes} from "@angular/router";

export const ContactsAppRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: '', component: ContactListComponent},
  {path: 'contact/:id', component: ContactDetailComponent}
];
