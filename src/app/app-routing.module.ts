import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign/sign.module').then( m => m.SignPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'book-detail/:id',
    loadChildren: () => import('./book-detail/book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },

  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
  {
    path: 'changeemail',
    loadChildren: () => import('./changeemail/changeemail.module').then( m => m.ChangeemailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
