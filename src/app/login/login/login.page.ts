import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string ='';
  password: string='';

  constructor(private router: Router,
     private authService: AuthService,
     private alertController: AlertController
    ) { }

  async login(){
    try {
      await this.authService.signInWithEmail(this.email, this.password);
      this.router.navigate(['/feed']);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      await this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro ao fazer login',
      message: 'Email ou senha inválidos!',
      cssClass: 'custom-alert',
      buttons: [{
        text: 'OK',
        cssClass: 'alert-button-confirm',
      }]
    });

    await alert.present();
  }

  back() {
    this.router.navigate(['home'])
  }



}
