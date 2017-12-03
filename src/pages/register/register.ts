import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parse } from 'parse';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    console.log("Register Button Clicked");
    var user = new Parse.User();
    user.set("username", "pratigya");
    user.set("password", "admin123");
    user.set("email", "kchetrip@gmail.com");
    user.signUp(null, {
      success: (user) =>{
        console.log(user);
      },
      error: (user, error) => {
       console.log(user,error);
      }
    });
  }

}
