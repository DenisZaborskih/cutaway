import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContactsModalComponent } from '../../modals/contacts-modal/contacts-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('modalContainer', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;


  openModalContacts() {
    this.container.clear();

    const componentRef = this.container.createComponent(ContactsModalComponent);
    componentRef.instance.closed.subscribe(() => {
      this.container.clear();
    });
  }

}
