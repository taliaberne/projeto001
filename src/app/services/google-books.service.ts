import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private apiKey = 'AIzaSyDY83xElP2nEx4M8BeWKQCiPhgfpGBHQ9Y';
  private baseUrl: string = 'https://www.googleapis.com/books/v1';

  constructor(private http: HttpClient) { }

  getBooks(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${query}&key=${this.apiKey}`);
  }

  getBookById(bookId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/volumes/${bookId}`);
  }
}
