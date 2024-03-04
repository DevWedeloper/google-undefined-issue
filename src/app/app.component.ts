import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styles: [],
  host: {
    '(window: load)': 'onWindowLoad()',
  },
})
export class AppComponent {
  title = 'google-undefined-issue';

  constructor() {
    afterNextRender(() => {
      window.onload = () => {
        console.log('app.component typeof google', typeof google);
      };
    });
  }

  protected onWindowLoad(): void {
    console.log('app.component window loaded');
  }
}
