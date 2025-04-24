import { Routes } from '@angular/router';
import { PostFormComponent } from './features/posts/post-form/post-form.component';
import { PostListComponent } from './features/posts/post-list/post-list.component';

export const routes: Routes = [
    { path : 'posts/new', component: PostFormComponent },
    { path : 'posts/:id/edit', component: PostFormComponent },
    { path : 'posts', component: PostListComponent },
    { path : '', redirectTo: 'posts', pathMatch: 'full' },
    { path : '**', redirectTo: 'posts' } 
];
