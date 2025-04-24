import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/articles'; // JSON Server URL

  constructor(private http: HttpClient) {}

  // Get all articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  // Get a single article by ID
  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  // Create a new article
  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article);
  }

  // Update an existing article
  updateArticle(id: number, article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, article);
  }

  // Delete an article
  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}