import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],  // Include CommonModule here
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private postService: PostService) {}

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
          this.getPosts();
        },
        (error) => {
          this.errorMessage = 'Error deleting post';
          this.loading = false;
        }
      );
    }
  }

  editPost(id: string): void {
    // Implement navigation to edit form with the post's ID
  }
}
