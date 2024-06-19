import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailPageRoutingModule } from './book-detail-routing.module';

import { BookDetailPage } from './book-detail.page';
import { StarRatingModule } from "../../star-rating/star-rating.module";

@NgModule({
    declarations: [BookDetailPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookDetailPageRoutingModule,
        StarRatingModule
    ]
})
export class BookDetailPageModule {}
