import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { getAuth , provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFkBXCzSoFGITK-X4b_mi316kWRfz6iRI",
  authDomain: "enaa-blog.firebaseapp.com",
  projectId: "enaa-blog",
  storageBucket: "enaa-blog.firebasestorage.app",
  messagingSenderId: "212045480348",
  appId: "1:212045480348:web:caf03910e5e3b6192e0859",
  measurementId: "G-5GRB6P320M"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
    
  ]
};
