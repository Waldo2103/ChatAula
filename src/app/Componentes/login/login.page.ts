import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  OnSubmitLogin() {
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/home']);
    }).catch(err => {
      //alert('los datos son incorrectos o no existe el usuario');
      // Implementar toast
      this.presentToast()
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'los datos son incorrectos o no existe el usuario',
      duration: 2000,
      color: "secondary"
    });
    toast.present();
  }
}
