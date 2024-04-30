import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { Post } from '../../models/Post';
import { of } from 'rxjs';
import { PostService } from '../../services/Post/post.service';

class mockPostService {
  getPost() { }
  deletePost() { 
    return of(true);
  }
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let postService: any;

  let POSTS: Post[] = [
    { id: 1, body: 'body 1', title: 'title 1' },
    { id: 2, body: 'body 2', title: 'title 2' },
    { id: 3, body: 'body 3', title: 'title 3' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [PostsComponent,
        {
          provide: PostService,
          useClass: mockPostService   // it resolve the DJ because the mockPostService will be Injected in PostsComponent
        }]
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(PostsComponent);  // The component is create with the PostsComponent Injected
    component = fixture.componentInstance;
    postService = TestBed.inject(PostService);
    component.posts = POSTS;    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should delete the selected Post from the posts', () => {
    component.delete(POSTS[1]);
    expect(component.posts.length).toBe(2);
  });

  it('Should delete the actual selected Post', () => {
    component.delete(POSTS[1]);
    for (let post of component.posts) {
      expect(post).not.toEqual(POSTS[1]);
    }
  })

  it('Should call the deletePost method in Post only once', () => {
    spyOn(postService, 'deletePost').and.callThrough();
    component.delete(POSTS[1]);
    expect(postService.deletePost).toHaveBeenCalledTimes(1);
  });  
});
