import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage {
  email: string ='';
  password: string ='';

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController
  ) { }

  async signup() {
    try {
      await this.authService.signUpWithEmail(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Erro ao registrar:', error);
      await this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro ao fazer cadastro',
      message: 'Por favor tente novamente.',
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
