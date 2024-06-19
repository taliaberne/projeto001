import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysteryPage } from './mystery.page';

const routes: Routes = [
  {
    path: '',
    component: MysteryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MysteryPageRoutingModule {}
