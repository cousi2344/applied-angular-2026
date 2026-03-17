import { Routes } from '@angular/router';
import { HomePage } from './internal/pages/home';
import { CounterPage } from './internal/pages/counter';
import { Home } from './internal/home';
import { PrefsPage } from './internal/pages/prefs';
import { counterStore } from './internal/counter-store';
export const signaldemosFeatureRoutes: Routes = [
  {
    path: '',
    component: Home,
    providers: [counterStore],
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
