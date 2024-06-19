import { Component, OnInit, OnDestroy  } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit, OnDestroy  {

  library: any[] = [];
  private librarySubscription: Subscription = new Subscription();

  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit() {
    this.library = this.libraryService.getLibrary();
    this.librarySubscription = this.libraryService.libraryUpdated$.subscribe(() => {
      this.library = this.libraryService.getLibrary();
    });
  }

  ngOnDestroy() {
    if (this.librarySubscription) {
      this.librarySubscription.unsubscribe();
    }
  }

  removeBook(bookId: string) {
    this.libraryService.removeBook(bookId);
    this.library = this.libraryService.getLibrary();
  }

  clearLibrary() {
    this.libraryService.clearLibrary();
    this.library = [];
  }

  openBookDetail(bookId: string) {
    this.router.navigate(['../../book-detail', bookId]);
  }



}
