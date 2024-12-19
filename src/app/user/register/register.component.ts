import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DOMAINS } from '../../constants';
import { EmailDirective } from '../../directives/email.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  domains = DOMAINS;
  model = {
    username: '',
    email: '',
    tel: '',
    password: '',
    rePassword: '',
  };

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }

  passwordsMatch(password: string, rePassword: string): boolean {
    return password === rePassword;
  }
}
