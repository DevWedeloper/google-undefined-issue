import { Component, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>example works!</p>
    <a routerLink="/home">Home</a>
  `,
  styles: ``,
  host: {
    '(window: load)': 'onWindowLoad()',
  },
})
export class ExampleComponent {
  constructor() {
    afterNextRender(() => {
      window.onload = () => {
        console.log('example.component typeof google', typeof google);
      };
    });
  }

  protected onWindowLoad(): void {
    console.log('example.component window loaded');
  }
}
