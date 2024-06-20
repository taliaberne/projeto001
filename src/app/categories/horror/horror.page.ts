import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-horror',
  templateUrl: './horror.page.html',
  styleUrls: ['./horror.page.scss'],
})
export class HorrorPage implements OnInit {

  books: any[] = [];
  categoryBooks: { [key: string]: any[] } = {};

  constructor(private googleBooksService: GoogleBooksService, private router: Router) { }

  ngOnInit() {
    this.getBooksByCategory('horror');
  }

  getBooksByCategory(category: string) {
    this.googleBooksService.getBooksByCategory(category).subscribe(response => {
      this.categoryBooks[category] = response.items;
    });
  }

  openBookDetail(bookId: string) {
    this.router.navigate(['../../book-detail', bookId]);
  }

  back() {
    this.router.navigate(['categories'])
  }

}

