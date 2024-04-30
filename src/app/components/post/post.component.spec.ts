import { first } from "rxjs";
import { Post } from "../../models/Post";
import { PostComponent } from "./post.component";

describe('Post Component', () => {
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
