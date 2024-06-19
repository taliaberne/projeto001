import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  query: string = '';
  books: any[] = [];
  categoryBooks: { [key: string]: any[] } = {};

  constructor(private googleBooksService: GoogleBooksService, private router: Router) { }

  ngOnInit() {
    this.getBooksByCategory('fiction');
    this.getBooksByCategory('science');
  }

  loadBooks() {
    this.googleBooksService.getBooks(this.query).subscribe(
      (response => {
        this.books = response.items;
      }),
      (error) => {
        console.error('Erro ao carregar livros:', error);
      }
    );
  }

  getBooksByCategory(category: string) {
    this.googleBooksService.getBooksByCategory(category).subscribe(response => {
      this.categoryBooks[category] = response.items;
    });
  }

  openBookDetail(bookId: string) {
    this.router.navigate(['../../book-detail', bookId]);
  }

  search() {
    this.router.navigate(['../../search']);
  }


}
