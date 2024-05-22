import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage {

  constructor(private router: Router) { }

  next(){
    this.router.navigate(['sign2'])
  }

  back() {
    this.router.navigate(['home'])
  }


}
