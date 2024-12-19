import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/user';
import { EmailDirective } from '../../directives/email.directive';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, EmailDirective, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  isEditMode: boolean = false;
  domains = DOMAINS;

  profileDetails: ProfileDetails = {
    username: '',
    email: '',
    tel: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const { username, email, tel } = this.userService.user!;
    this.profileDetails = { username, email, tel: tel! }; // This binds to the template automatically.
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  handleSaveProfile(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.profileDetails = form.value;
    const { username, email, tel } = this.profileDetails;
    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.toggleEditMode();
    });
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.toggleEditMode();
  }
}
