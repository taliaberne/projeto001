import { Component, OnInit} from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  books: any[] = [];
  defaultQuery: string = 'fiction';

  constructor(private googleBooksService: GoogleBooksService, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.googleBooksService.getBooks(this.defaultQuery).subscribe(
      (response) => {
        this.books = response.items;
      },
      (error) => {
        console.error('Erro ao carregar livros:', error);
      }
    );
  }

  openBookDetail(bookId: string) {
    this.router.navigate(['../../book-detail', bookId]);
  }



}
