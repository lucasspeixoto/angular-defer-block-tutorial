import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  imports: [],
  template: `
    <div class="container">
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          @for(post of posts(); track post.id) {
          <tr>
            <td>{{ post.userId }}</td>
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  private http = inject(HttpClient);

  public posts$ = this.http.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  public posts = toSignal(this.posts$, {
    initialValue: [] as Post[],
  });

  public columns: { field: string; header: string }[] = [
    { field: 'userId', header: 'User Id' },
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Title' },
    { field: 'body', header: 'Post' },
  ];
}
