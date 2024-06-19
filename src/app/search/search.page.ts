import { Component } from '@angular/core';
import { GoogleBooksService } from '../services/google-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  query: string = '';
  books: any[] = [];
  categoryBooks: { [key: string]: any[] } = {};

  constructor(private googleBooksService: GoogleBooksService, private router: Router) { }

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

  openBookDetail(bookId: string) {
    this.router.navigate(['../book-detail', bookId]);
  }

  back() {
    this.router.navigate(['feed'])
  }



}
