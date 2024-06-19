import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FictionPage } from './fiction.page';

const routes: Routes = [
  {
    path: '',
    component: FictionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FictionPageRoutingModule {}
