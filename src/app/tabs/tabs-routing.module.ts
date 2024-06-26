import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'feed',
          loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule)
      },

      {
        path:'library',
          loadChildren: () => import('../pages/library/library.module').then(m => m.LibraryPageModule)
      },
      {
        path:'profile',
            loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },

      {
        path: 'categories',
          loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
