import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contacts-modal',
  standalone: true,
  imports: [],
  templateUrl: './contacts-modal.component.html',
  styleUrl: './contacts-modal.component.scss'
})
export class ContactsModalComponent{
  @Output() closed = new EventEmitter();

  closeModal(){
    this.closed.emit();
  }

}
