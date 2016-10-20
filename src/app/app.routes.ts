import {ContactListComponent, ContactsEditorViewComponent, ContactsDetailViewComponent} from "./components";
import {Routes} from "@angular/router";

export const ContactsAppRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: '', component: ContactListComponent},
  {path: 'contact/:id', component: ContactsDetailViewComponent},
  {path: 'contact/:id/edit', component: ContactsEditorViewComponent}
];
