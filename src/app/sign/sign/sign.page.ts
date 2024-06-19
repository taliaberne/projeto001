import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage {
  email: string ='';
  password: string ='';

  constructor(private router: Router, private authService: AuthService) { }

  async signup() {
    try {
      await this.authService.signUpWithEmail(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  }

  back() {
    this.router.navigate(['home'])
  }


}
