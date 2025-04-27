import { Routes } from '@angular/router';

import { PostFormComponent } from './features/posts/post-form/post-form.component';
import { PostListComponent } from './features/posts/post-list/post-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuardGuard } from '../app/core/guards/auth-guard.guard'; // Add this import - adjust path as needed

export const routes: Routes = [
    { 
        path: 'posts/new', 
        component: PostFormComponent,
        canActivate: [authGuardGuard] // Guard protects create post route
    },
    { 
        path: 'posts/:id/edit', 
        component: PostFormComponent,
        canActivate: [authGuardGuard] // Guard protects edit post route
    },
    { 
        path: 'posts', 
        component: PostListComponent,
        canActivate: [authGuardGuard] // Guard allows viewing for all, but checks for create/edit attempts
    },
    { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'register', component: RegisterComponent }, 
    { path: '**', redirectTo: '' }
];