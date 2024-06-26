import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage  {

  constructor(private router: Router) { }

  back() {
    this.router.navigate(['profile'])
  }

  changeemail() {
    this.router.navigate(['changeemail'])
  }

  changepass() {
    this.router.navigate(['changepass'])
  }

  logout() {
    this.router.navigate(['home'])
  }


}
