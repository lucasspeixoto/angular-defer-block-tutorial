import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <div class="container">
      <h2>Comments</h2>
      <table>
        <thead>
          <tr>
            <th>Post Id</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          @for(comment of comments(); track comment.id) {
          <tr>
            <td>{{ comment.postId }}</td>
            <td>{{ comment.id }}</td>
            <td>{{ comment.name }}</td>
            <td>{{ comment.email }}</td>
            <td>{{ comment.body }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styleUrl: './comments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {
  private http = inject(HttpClient);

  public comments$ = this.http.get<Comment[]>(
    'https://jsonplaceholder.typicode.com/comments'
  );

  public comments = toSignal(this.comments$, {
    initialValue: [] as Comment[],
  });

  public columns: { field: string; header: string }[] = [
    { field: 'postId', header: 'Post Id' },
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'username', header: 'Username' },
    { field: 'email', header: 'Email' },
    { field: 'body', header: 'Comment' },
  ];
}
