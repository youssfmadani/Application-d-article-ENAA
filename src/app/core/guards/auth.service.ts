import { inject, Injectable, signal } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user, UserCredential } from "@angular/fire/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "../../user.interface";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null>(null);

  constructor() {
    // Subscribe to the user$ observable to update the currentUserSig signal
    this.user$.subscribe((firebaseUser) => {
      if (firebaseUser) {
        const user: UserInterface = {
          email: firebaseUser.email ?? '',
          username: firebaseUser.displayName ?? ''
        };
        this.currentUserSig.set(user);
      } else {
        this.currentUserSig.set(null);
      }
    });
  }

  register(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((response) => updateProfile(response.user, { displayName: username }));
    return from(promise);
  }

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password));
  }

  logout(): Observable<void> {
    return from(signOut(this.firebaseAuth));
  }
}