import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://firestore.googleapis.com/v1/projects/enaa-blog-fa8d4/databases/(default)/documents/ENAA/post?key=AIzaSyAXQ4wh_DzO8TOTDG--uRr9vdXXRHqEVK8';  // Correct Firestore endpoint without API key

  constructor(private http: HttpClient) {}

  // Get all posts from Firestore
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);  // Fetch all posts
  }

  // Get a single post by ID from Firestore
  getPost(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);  // Fetch a single post by ID
  }

  // Create a new post in Firestore
  createPost(post: any): Observable<any> {
    // Firestore POST to create a new document
    const postData = {
      fields: {
        title: { stringValue: post.title },
        content: { stringValue: post.content },
        author: { stringValue: post.author },
        date: { stringValue: post.date },
        tags: { arrayValue: { values: post.tags.map((tag: any) => ({ stringValue: tag })) } },
        imageUrl: { stringValue: post.imageUrl },
        likes: { integerValue: post.likes }
      }
    };
    return this.http.post<any>(this.apiUrl, postData);  // Send data to Firestore
  }

  // Update an existing post in Firestore
  updatePost(id: string, post: any): Observable<any> {
    // Firestore PUT to update the existing document
    const postData = {
      fields: {
        title: { stringValue: post.title },
        content: { stringValue: post.content },
        author: { stringValue: post.author },
        date: { stringValue: post.date },
        tags: { arrayValue: { values: post.tags.map((tag: any) => ({ stringValue: tag })) } },
        imageUrl: { stringValue: post.imageUrl },
        likes: { integerValue: post.likes }
      }
    };
    return this.http.patch<any>(`${this.apiUrl}/${id}`, postData);  // Firestore PATCH for updating document
  }

  // Delete a post by ID from Firestore
  deletePost(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);  // Firestore DELETE request for a post
  }
}
