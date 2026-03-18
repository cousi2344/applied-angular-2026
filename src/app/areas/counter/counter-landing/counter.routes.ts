import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/home';
import { CounterPage } from './internal/pages/counter';
import { PrefsPage } from './internal/pages/prefs';
import { counterStore } from './internal/counter-store';

export const counterFeatureRoutes: Routes = [
  {
    path: '',
    providers: [counterStore],
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
      {
        path: 'prefs',
        component: PrefsPage,
      },
    ],
  },
];
