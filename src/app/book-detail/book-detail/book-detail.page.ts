import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private booksService: GoogleBooksService) { }

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
    this.booksService.getBookById(bookId).subscribe((data: any) => {
      this.book = data.volumeInfo;
    });
   } else {
    console.error('Book ID is null');
   }
}

}
