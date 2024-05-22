import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign2',
  templateUrl: './sign2.page.html',
  styleUrls: ['./sign2.page.scss'],
})
export class Sign2Page {

  constructor(private router: Router) { }

  signup(){
    this.router.navigate(['login'])
  }

  back() {
    this.router.navigate(['sign'])
  }


}
