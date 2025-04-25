import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/guards/auth.service';
import { UserInterface } from '../user.interface';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  currentUser = signal<UserInterface | null>(null);

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  
    this.currentUser = this.authService.currentUserSig;
  }

  signOut() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Logout failed:', err);
      }
    });
  }
}