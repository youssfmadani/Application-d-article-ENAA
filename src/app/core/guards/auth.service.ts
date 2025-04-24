import { inject, Injectable, signal } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, user, UserCredential } from "@angular/fire/auth";
import { Observable, from } from "rxjs";
import { UserInterface } from "../../user.interface";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserInterface | null>(null);

  register(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
      .then((response) => updateProfile(response.user, { displayName: username }));
    return from(promise); // Returns Observable<void> because updateProfile resolves to void
  }

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password)); // Returns Observable<UserCredential>
  }
}