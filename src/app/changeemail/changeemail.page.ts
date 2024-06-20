import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.page.html',
  styleUrls: ['./changeemail.page.scss'],
})
export class ChangeemailPage {


  constructor(private router: Router) { }

  back() {
    this.router.navigate(['settings'])
  }
}
