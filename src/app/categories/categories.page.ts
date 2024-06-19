import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage  {

  constructor(private router: Router) { }

  search() {
    this.router.navigate(['../search']);
  }

  fiction() {
    this.router.navigate(['../categories/fiction']);
  }

  romance() {
    this.router.navigate(['../categories/romance']);
  }

}
