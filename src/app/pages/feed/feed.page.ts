import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  query: string = '';
  books: any[] = [];
  @ViewChild('carousel', { read: ElementRef, static: false }) carousel!: ElementRef;
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient, private googleBooksService: GoogleBooksService, private router: Router) { }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    const params = {
      q: 'subject:fiction',
      orderBy: 'relevance',
      maxResults: '10'
    };

    this.http.get(this.API_URL, { params }).subscribe((data: any) => {
      this.books = data.items;
    });

  }

  openBookDetail(bookId: string) {
    this.router.navigate(['../../book-detail', bookId]);
  }

  search() {
    this.router.navigate(['../../search']);
  }




}
