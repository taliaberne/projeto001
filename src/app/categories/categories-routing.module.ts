import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  },  {
    path: 'fiction',
    loadChildren: () => import('./fiction/fiction.module').then( m => m.FictionPageModule)
  },
  {
    path: 'romance',
    loadChildren: () => import('./romance/romance.module').then( m => m.RomancePageModule)
  },
  {
    path: 'fantasy',
    loadChildren: () => import('./fantasy/fantasy.module').then( m => m.FantasyPageModule)
  },
  {
    path: 'comedy',
    loadChildren: () => import('./comedy/comedy.module').then( m => m.ComedyPageModule)
  },
  {
    path: 'action',
    loadChildren: () => import('./action/action.module').then( m => m.ActionPageModule)
  },
  {
    path: 'mystery',
    loadChildren: () => import('./mystery/mystery.module').then( m => m.MysteryPageModule)
  },
  {
    path: 'horror',
    loadChildren: () => import('./horror/horror.module').then( m => m.HorrorPageModule)
  },
  {
    path: 'science',
    loadChildren: () => import('./science/science.module').then( m => m.SciencePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
