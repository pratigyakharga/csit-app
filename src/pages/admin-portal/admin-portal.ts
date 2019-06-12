import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminPortalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-portal',
  templateUrl: 'admin-portal.html',
})
export class AdminPortalPage {

  subject: string;
  semester: string;
  pdfChoosen: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPortalPage');
  }

  choosePdf(){
    console.log('will choose PDF');
  }

  uploadPdf(){
    console.log('will upload pdf');
  }

}
