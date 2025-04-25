import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://your-backend-api-url/posts';  // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Fetch all posts
  }

  getPost(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);  // Fetch a single post by ID
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);  // Create a new post
  }

  updatePost(id: string, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);  // Update post by ID
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);  // Delete post by ID
  }
}
