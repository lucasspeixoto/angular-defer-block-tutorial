import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="app-footer">
      <h3>&copy; 2025 App</h3>
    </footer>
  `,
  styles: `
    .app-footer {
      position: fixed;
      bottom: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.33);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.76);
      color: rgb(36, 36, 36);
      padding: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
