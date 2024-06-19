import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from '../../services/google-books.service';
import { Router } from '@angular/router';
import { LibraryService } from '../../services/library.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {

  book: any;
  isInLibrary: boolean = false;
  bookRating: number = 0;

  constructor(
    private route: ActivatedRoute,
    private booksService: GoogleBooksService,
    private router: Router,
    private libraryService: LibraryService,
    private storage: Storage,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.booksService.getBookById(bookId).subscribe(response => {
        this.book = response;
        this.checkIfInLibrary();
        this.loadRating(bookId);
      });

    } else {
      console.error('Book ID is null');
    }
  }

  async addToLibrary() {
    this.libraryService.addBook(this.book);
    this.isInLibrary = true;
    await this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Livro Adicionado!',
      message: 'O livro foi adicionado à sua biblioteca com sucesso.',
      cssClass: 'custom-alert',
      buttons: [{
        text: 'OK',
        cssClass: 'alert-button-confirm',
    }]
    });

    await alert.present();
  }


  checkIfInLibrary() {
    const library = this.libraryService.getLibrary();
    this.isInLibrary = library.some(item => item.id === this.book.id);
  }

  async loadRating(bookId: string) {
    const rating = await this.storage.get(`rating_${bookId}`);
    if (rating !== null) {
      this.bookRating = rating;
    }
  }

  async onRatingChanged(rating: number) {
    this.bookRating = rating;
    const bookId = this.book.id;
    await this.storage.set(`rating_${bookId}`, rating);
  }

  back() {
    this.router.navigate(['feed'])
  }


}
