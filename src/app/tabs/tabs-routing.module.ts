import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { FeedPage } from '../pages/feed/feed.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'feed',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },

      {
        path:'search',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },

      {
        path:'library',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/library/library.module').then(m => m.LibraryPageModule)
          }
        ]
      },

      {
        path:'profile',
        children: [
          {
            path:'',
            loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
