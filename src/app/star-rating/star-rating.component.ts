import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() readonly: boolean = false;
  @Output() ratingChanged: EventEmitter<number> = new EventEmitter<number>();

  stars: boolean[] = Array(5).fill(false);


// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
ngOnChanges() {
    this.updateStars();
  }

  updateStars() {
    this.stars = this.stars.map((_, i) => i < this.rating);
  }

  rate(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChanged.emit(this.rating);
      this.updateStars();
    }
  }
}
