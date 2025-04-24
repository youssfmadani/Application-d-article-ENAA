// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      <input [(ngModel)]="username" name="username" placeholder="Username" required>
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/post']);
    } else {
      alert('Identifiants invalides');
    }
  }
}
