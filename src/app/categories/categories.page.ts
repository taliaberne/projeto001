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

  action() {
    this.router.navigate(['../categories/action']);
  }

  comedy() {
    this.router.navigate(['../categories/comedy']);
  }

  fantasy() {
    this.router.navigate(['../categories/fantasy']);
  }

  fiction() {
    this.router.navigate(['../categories/fiction']);
  }

  horror() {
    this.router.navigate(['../categories/horror']);
  }

  mystery() {
    this.router.navigate(['../categories/mystery']);
  }

  romance() {
    this.router.navigate(['../categories/romance']);
  }

  science() {
    this.router.navigate(['../categories/science']);
  }

}
