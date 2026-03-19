import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/home';
import { ListPage } from './internal/pages/list';
import { AddPage } from './internal/pages/add';
import { DetailPage } from './internal/pages/detail';

export const resourcesFeatureRoutes: Routes = [
  {
    path: '',
    providers: [],
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'list/:id',
        component: DetailPage,
      },
      {
        path: 'list',
        component: ListPage,
      },
      {
        path: 'add',
        component: AddPage,
      },
    ],
  },
];
