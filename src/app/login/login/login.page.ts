import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string ='';
  password: string='';

  constructor(private router: Router, private authService: AuthService) { }

  async login(){
    try {
      await this.authService.signInWithEmail(this.email, this.password);
      this.router.navigate(['/feed']);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }

  back() {
    this.router.navigate(['home'])
  }



}
