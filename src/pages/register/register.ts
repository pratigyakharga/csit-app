import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Parse } from 'parse';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  username : string;
  email : string;
  password : string;
  password2 : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    console.log("Register Button Clicked");
    if(this.password !== this.password2){
      this.showPasswordMismatchError();
      return;
    }

    var user = new Parse.User();
    user.set("username", this.username);
    user.set("password", this.password);
    user.set("email", this.email);
    user.signUp(null, {
      success: (user) =>{
        console.log(user, 'success register');
        this.navCtrl.push(HomePage);
      },
      error: (error) => {
        this.showRegisterFailError(error);
      }
    });
  }

  showPasswordMismatchError() {
    console.log('password not match!');
    let alert = this.alertCtrl.create({
      title: 'Password mismatch',
      subTitle: 'Please re-enter the same password.',
      buttons: ['Ok']
    });
    alert.present();
  }

    showRegisterFailError(error){
    console.log(error, 'error register');
      let alert = this.alertCtrl.create({
        title: 'Registration failed',
        subTitle: 'Your account couldn\'t be registered. Please provide different username or email.',
        buttons: ['Ok']
      });
      alert.present();
  }
}
