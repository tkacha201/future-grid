import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DOMAINS } from '../../constants';
import { EmailDirective } from '../../directives/email.directive';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

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

  constructor(private userService: UserService, private router: Router) {}

  passwordsMatch(password: string, rePassword: string): boolean {
    return password === rePassword;
  }
  register(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const {
      username,
      email,
      tel,
      passGroup: { password, rePassword } = {},
    } = form.value;
    this.userService
      .register(username!, email!, tel!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/articles']);
      });
  }
}
