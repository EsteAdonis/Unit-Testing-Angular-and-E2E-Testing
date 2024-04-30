import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/Post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post!: Post;
  @Output() delete = new EventEmitter<Post>();

  onDeletePost(event: Event) {
    event.stopPropagation();
    this.delete.emit(this.post);
  }
}