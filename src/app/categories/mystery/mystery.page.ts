import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mystery',
  templateUrl: './mystery.page.html',
  styleUrls: ['./mystery.page.scss'],
})
export class MysteryPage implements OnInit {

  books: any[] = [];
  categoryBooks: { [key: string]: any[] } = {};

  constructor(private googleBooksService: GoogleBooksService, private router: Router) { }

  ngOnInit() {
    this.getBooksByCategory('mystery');
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

