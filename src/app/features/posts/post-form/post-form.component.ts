import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { FormsModule, NgModel } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-form',
  standalone: true, 
  imports: [FormsModule, CommonModule],  
  templateUrl: './post-form.component.html', 
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post = {
    title: '',
    content: ''
  };
  postId: string | null = null;
  errorMessage: string = '';
  successMessage: string = '';
  loading: boolean = false;
  isFormValid: boolean = true; 

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
      if (this.postId) {
        this.getPost(this.postId);
      }
    });
  }


  getPost(id: string): void {
    this.loading = true;
    this.postService.getPost(id).subscribe(
      (data: { title: string; content: string }) => {
        this.post = data;
        this.loading = false;
      },
      () => {
        this.errorMessage = 'Error fetching post';
        this.loading = false;
      }
    );
  }

  validateForm(): boolean {
    if (!this.post.title || !this.post.content) {
      this.isFormValid = false;
      this.errorMessage = 'Title and Content are required';
      return false;
    }
    this.isFormValid = true;
    return true;
  }


  submitPost(): void {
    if (!this.validateForm()) {
      return; 
    }

    this.loading = true;
    if (this.postId) {
   
      this.postService.updatePost(this.postId, this.post).subscribe(
        () => {
          this.successMessage = 'Post updated successfully';
          this.router.navigate(['/posts']);
        },
        () => {
          this.errorMessage = 'Error updating post';
          this.loading = false;
        }
      );
    } else {
  
      this.postService.createPost(this.post).subscribe(
        () => {
          this.successMessage = 'Post created successfully';
          this.router.navigate(['/posts']);
        },
        () => {
          this.errorMessage = 'Error creating post';
          this.loading = false;
        }
      );
    }
  }
}
