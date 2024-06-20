import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage {


  constructor(private router: Router) { }

  back() {
    this.router.navigate(['settings'])
  }
}
