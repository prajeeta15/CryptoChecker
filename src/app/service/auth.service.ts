import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private afAuth: AngularFireAuth) {
    // Listen for authentication state changes
    this.afAuth.authState.subscribe(user => {
      this.user$.next(user);
    });
  }

  // Google OAuth Login
  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);
      this.user$.next(result.user);
    } catch (error) {
      console.error('Google login error:', error);
    }
  }

  // Logout
  async logout(): Promise<void> {
    await this.afAuth.signOut();
    this.user$.next(null);
  }

  // Get User Observable
  getUser(): Observable<any> {
    return this.user$.asObservable();
  }
}
