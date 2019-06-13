import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import {Parse} from 'parse';
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
  uploadFile: File;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fileChooser: FileChooser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPortalPage');
  }

  choosePdf(event){
    console.log('will choose PDF', event);
    let file = event.target.files[0];
    console.log(file);
    this.uploadFile = file;
  }

  uploadPdf(){
    console.log('will upload pdf');
    let parseFile = new Parse.File('myFile', this.uploadFile);
    parseFile
    .save()
    .then((saved)=> {
      console.log(' saved ',saved);
    })
    .catch((err)=> {
      console.log('error : ', err);
    });
  }

}
