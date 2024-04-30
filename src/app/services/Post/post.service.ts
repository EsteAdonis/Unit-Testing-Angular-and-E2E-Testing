import { Injectable } from '@angular/core';
import { Post } from '../../models/Post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPost() {
    return this.httpClient.get<Post[]>(this.url);
  }

  deletePost(post: Post) {
    return this.httpClient.delete<Post>(`${this.url}/${post.id}`);
  }
}
