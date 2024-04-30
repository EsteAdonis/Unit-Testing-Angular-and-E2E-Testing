import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/Post/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
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
