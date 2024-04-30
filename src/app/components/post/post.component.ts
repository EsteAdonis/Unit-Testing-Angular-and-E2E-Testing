import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PostService } from '../../services/Post/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postService.getPost().subscribe(post => this.posts = post);
  }

  delete(post: Post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }
}

