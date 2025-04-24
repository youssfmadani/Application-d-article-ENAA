import { Routes } from '@angular/router';

import { PostFormComponent } from './features/posts/post-form/post-form.component';
import { PostListComponent } from './features/posts/post-list/post-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path : 'posts/new', component: PostFormComponent },
    { path : 'posts/:id/edit', component: PostFormComponent },
    { path : 'posts', component: PostListComponent },

    { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'register', component: RegisterComponent }, 
    { path: '**', redirectTo: '' } 

];
