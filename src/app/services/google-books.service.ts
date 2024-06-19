import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private baseUrl: string = 'https://www.googleapis.com/books/v1';

  constructor(private http: HttpClient) { }

  getBooks(query: string): Observable<any> {
    const params = {
      q: query,
      key: 'AIzaSyDY83xElP2nEx4M8BeWKQCiPhgfpGBHQ9Y'
    };
    return this.http.get(this.apiUrl, { params });
  }

  getBooksByCategory(category: string): Observable<any> {
    const params = {
      q: `subject:${category}`,
      key: 'AIzaSyDY83xElP2nEx4M8BeWKQCiPhgfpGBHQ9Y'
    };
    return this.http.get(this.apiUrl, { params });
  }

  getBookById(bookId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/volumes/${bookId}`);
  }
}
