import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommentsComponent } from '../comments/comments.component';
import { PostsComponent } from '../posts/posts.component';
import { LoadingComponent } from "../shared/loading/loading.component";

@Component({
  selector: 'app-main',
  imports: [
    FooterComponent,
    HeaderComponent,
    CommentsComponent,
    PostsComponent,
    LoadingComponent
],
  template: `
    <div class="layout">
      <app-header />

      <div class="content">
        <button (click)="onLoad()">Trigger Prefetch</button>

        <button (click)="onDisplay()">Trigger Display</button>

        @defer(when show; prefetch when load) {
          <h1>Conteudo</h1>
        }
      </div>

      <div class="content">
        @defer (on viewport; prefetch on idle) {
          <app-comments />
        } @placeholder {
          <h2>Comments are loading...</h2>
        } @loading (minimum 4s) {
          <app-loading />
        } @error {
          <h2>Failed to load Comments</h2>
        }
      </div>

      <app-footer />
    </div>
  `,
  styles: `
      .layout {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }

    .content {
      padding: 20px 40px;
      overflow-y: auto;
      height: calc(100vh - 115px);

      & > h2 {
        margin: 20px;
        color: #333;
        opacity: 0.8;
        font-weight: bold;
      }
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  load: boolean = false;
  show: boolean = false;

  onLoad() {
    this.load = true;
  }

  onDisplay() {
    this.show = true;
  }
}
