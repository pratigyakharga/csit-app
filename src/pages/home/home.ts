import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Parse } from 'parse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.username = "pratigya";
    this.password = "admin123";
  }

  forgotPassword() {
    console.log('hello, forgot password');

    const prompt = this.alertCtrl.create({
      title: 'Reset password',
      message: "Enter your email address",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Reset',
          handler: data => {
            console.log('Reset clicked', data);
            let email = data.email;
            Parse.User.requestPasswordReset(email)
              .then(() => {
                console.log('reset success');
              })
              .catch(() => {
                console.log('reset error');
              });
          }
        }
      ]
    });
    prompt.present();
  }

  goToMainPage() {
    Parse.User.logIn(this.username, this.password, {
      success: (response) => {
        console.log(response, 'success');
        let role = response.get('role');
        console.log('the user role is : ', role);
        if (role === 'admin') {
          this.navCtrl.setRoot('AdminPortalPage');
        } else {
          this.navCtrl.setRoot('SearchPage');
        }
      },
      error: (err) => {
        console.log(err, 'error');
        this.showLoginError();
      }
    });
  }

  showLoginError() {
    let alert = this.alertCtrl.create({
      title: 'Login failed',
      subTitle: 'Incorrect ID or password. Please provide correct login credentials.',
      buttons: ['Ok']
    });
    alert.present();
  }

  goToRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  goToUploadPage() {
    this.navCtrl.push('UploadPage');
  }
}
