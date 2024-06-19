import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MysteryPageRoutingModule } from './mystery-routing.module';

import { MysteryPage } from './mystery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MysteryPageRoutingModule
  ],
  declarations: [MysteryPage]
})
export class MysteryPageModule {}
