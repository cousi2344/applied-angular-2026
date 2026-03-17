import { Routes } from '@angular/router';
import { HomePage } from './internal/pages/home';
import { CounterPage } from './internal/pages/counter';
import { Home } from './internal/home';
export const signaldemosFeatureRoutes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'counter',
        component: CounterPage,
      },
    ],
  },
];
