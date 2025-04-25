import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostFormComponent } from './features/posts/post-form/post-form.component';
import { PostListComponent } from './features/posts/post-list/post-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppComponent,  // Import AppComponent if it's standalone
    PostFormComponent,
    PostListComponent,
  ],
  // Removed bootstrap array as AppComponent is standalone
})
export class AppModule {}
