import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StarRatingComponent } from './star-rating.component';

@NgModule({
  declarations: [StarRatingComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [StarRatingComponent]
})
export class StarRatingModule { }

export { StarRatingComponent };
