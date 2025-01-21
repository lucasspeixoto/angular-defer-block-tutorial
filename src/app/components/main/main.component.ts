import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommentsComponent } from '../comments/comments.component';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-main',
  imports: [
    FooterComponent,
    HeaderComponent,
    CommentsComponent,
    PostsComponent,
  ],
  template: `
    <div class="layout">
      <app-header />

      <div class="content">
        <app-posts />

        <app-comments />
      </div>

      <app-footer />
    </div>
  `,
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
}
