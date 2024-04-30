import { first } from "rxjs";
import { Post } from "../../models/Post";
import { PostComponent } from "./post.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe('Post Component', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });    

  it('Should raise an event  when the delete post is clicked', () => {
    const comp = new PostComponent();
    const post: Post = { id: 1, body: 'Body 1', title: 'Adonis' };
    comp.post = post;

    comp.delete.pipe(first()).subscribe(selectedPost => {
      expect(selectedPost).toEqual(post);
    });

    comp.onDeletePost(new MouseEvent('click'));
  });
});
