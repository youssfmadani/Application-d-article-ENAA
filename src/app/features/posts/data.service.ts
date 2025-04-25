import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Make sure AngularFire is installed
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  deletePost(id: string) {
    return this.firestore.collection('posts').doc(id).delete();

  }
  updatePost(postId: string, post: { title: string; content: string; }) {
    return this.firestore.collection('posts').doc(postId).update(post);}
  constructor(private firestore: AngularFirestore) {}

  addPost(post: { title: string; content: string }) {
    return this.firestore.collection('posts').add(post);
  }

  getPosts(): Observable<any[]> {
    return this.firestore.collection('posts').valueChanges({ idField: 'id' });
  }
}
