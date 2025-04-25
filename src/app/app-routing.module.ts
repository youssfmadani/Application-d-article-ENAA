import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './features/posts/post-form/post-form.component';
import { PostListComponent } from './features/posts/post-list/post-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },  // Redirect to posts list by default
  { path: 'posts', component: PostListComponent },  // Route for viewing all posts
  { path: 'posts/new', component: PostFormComponent },  // Route for creating a new post
  { path: 'posts/edit/:id', component: PostFormComponent },  // Route for editing a post
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Register the routes with the router module
  exports: [RouterModule],  // Export the router module to be used in the app
})
export class AppRoutingModule {}
