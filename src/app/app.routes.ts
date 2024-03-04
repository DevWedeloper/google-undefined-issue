import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'example',
    loadComponent: () =>
      import('./example/example.component').then((m) => m.ExampleComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
