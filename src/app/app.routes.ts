import {ContactListComponent, ContactsEditorComponent} from "./components";
import {Routes} from "@angular/router";
import {ContactsDetailViewComponent} from "./components/contacts-detail-view/contacts-detail-view.component";

export const ContactsAppRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: '', component: ContactListComponent},
  {path: 'contact/:id', component: ContactsDetailViewComponent},
  {path: 'contact/:id/edit', component: ContactsEditorComponent}
];
