import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="app-header">
      <h1>My App</h1>
    </header>
  `,
  styles: `
    .app-header {
      background: rgba(255, 255, 255, 0.33);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.76);
      color:rgb(36, 36, 36);
      padding: 15px;
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100%;
      height: 65px;
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
