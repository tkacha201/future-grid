import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/user';
import { EmailDirective } from '../../directives/email.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, EmailDirective, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  isEditMode: boolean = false;
  domains = DOMAINS;

  profileDetails: ProfileDetails = {
    userName: 'JohnDoe',
    email: 'johndoe@gmail.com',
    tel: '123-123-123',
  };

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  handleSaveProfile(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.profileDetails = form.value;
    this.toggleEditMode();
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.toggleEditMode();
  }
}
