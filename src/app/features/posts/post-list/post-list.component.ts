import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  // Import Router for navigation
import { PostService } from '../../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  imports: [RouterModule,CommonModule],  // No additional imports needed here
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
truncateContent(arg0: any,arg1: number) {
throw new Error('Method not implemented.');
}
  posts: any[] = [];
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private postService: PostService,
    private router: Router  // Inject the Router to navigate
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.loading = true;
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching posts';
        this.loading = false;
      }
    );
  }

  deletePost(id: string): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.loading = true;
      this.postService.deletePost(id).subscribe(
        () => {
          this.getPosts();  // Reload the posts after deletion
        },
        (error) => {
          this.errorMessage = 'Error deleting post';
          this.loading = false;
        }
      );
    }
  }

  editPost(id: string): void {
    this.router.navigate(['/edit', id]);  // Navigate to the edit form with the post's ID
  }
}
