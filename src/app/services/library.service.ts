import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private storageKey = 'myLibrary';
  private libraryUpdated = new Subject<void>();

  libraryUpdated$ = this.libraryUpdated.asObservable();

  constructor() { }

  addBook(book: any): void {
    let library = this.getLibrary();
    const isBookInLibrary = library.some(item => item.id === book.id);

    if (!isBookInLibrary) {
      library.push(book);
      localStorage.setItem(this.storageKey, JSON.stringify(library));
      this.libraryUpdated.next(); // Emitir um evento de atualização
    }
  }

  getLibrary(): any[] {
    const library = localStorage.getItem(this.storageKey);
    return library ? JSON.parse(library) : [];
  }

  removeBook(bookId: string): void {
    let library = this.getLibrary();
    library = library.filter(book => book.id !== bookId);
    localStorage.setItem(this.storageKey, JSON.stringify(library));
    this.libraryUpdated.next();
  }

  clearLibrary(): void {
    localStorage.removeItem(this.storageKey);
    this.libraryUpdated.next();
  }

}
