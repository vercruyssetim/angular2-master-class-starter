import {
  ContactListComponent,
  ContactsEditorViewComponent,
  ContactsDetailViewComponent,
  ContactCreatorComponent
} from "./components";
import {Routes} from "@angular/router";

export const ContactsAppRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: '', component: ContactListComponent},
  {path: 'contact/:id', component: ContactsDetailViewComponent},
  {path: 'contact/:id/edit', component: ContactsEditorViewComponent},
  {path: 'contacts/new', component: ContactCreatorComponent}
];
