import { Component, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>home works!</p>
    <a routerLink="/example">Example</a>
  `,
  styles: ``,
  host: {
    '(window: load)': 'onWindowLoad()',
  },
})
export class HomeComponent {
  constructor() {
    afterNextRender(() => {
      window.onload = () => {
        console.log('home.component typeof google', typeof google);
      };
    });
  }

  protected onWindowLoad(): void {
    console.log('home.component window loaded');
  }
}
