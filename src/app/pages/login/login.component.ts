import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/guards/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.authService.login(email, password).subscribe({
        next: (credential) => { // Accept UserCredential, but we don’t need to use it
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.errorMessage = err.code;
        }
      });
    }
  }
}