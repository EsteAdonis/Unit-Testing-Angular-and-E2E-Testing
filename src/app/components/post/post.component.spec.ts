import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { Post } from '../../models/Post';
import { of } from 'rxjs';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let mockPostService: any;

  let POSTS: Post[] = [
    { id: 1, body: 'body 1', title: 'title 1' },
    { id: 2, body: 'body 2', title: 'title 2' },
    { id: 3, body: 'body 3', title: 'title 3' },    
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent]
    })
    .compileComponents();
  
    // fixture = TestBed.createComponent(PostComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);
    mockPostService.deletePost.and.returnValue(of(true));      
    component = new PostComponent(mockPostService);
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
    component.delete(POSTS[1]);
    expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
  });  
});
