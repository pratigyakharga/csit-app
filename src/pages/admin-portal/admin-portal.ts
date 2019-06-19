import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Parse} from 'parse';
import {AlertController} from 'ionic-angular';
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

  subject: string = 'Calculus';
  semester: string = 'First';
  term: string = 'Mid';
  year: string = '2019';
  pdfChoosen: boolean;
  uploadFile: File;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtr: AlertController) {
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

      this.saveQuestion(saved._url);

    })
    .catch((err)=> {
      console.log('error : ', err);
    });
  }

  saveQuestion(url){

    let QuestionData = {
      pdfUrl: url,
      term: this.term,
      subject: this.subject,
      semester: this.semester,
      year: parseInt(this.year),
      type: 'pdf'
    };
    
    let Question = Parse.Object.extend('Questions');
    let question = new Question();
    question.save(QuestionData)
    .then((savedQuestion)=> {
      console.log('saved question: ', savedQuestion);
      this.showSuccessDialog();
    })
    .catch(err => {
      console.log('save error in question');
    });

  }

  showSuccessDialog(){
    let alert = this.alertCtr.create({
      title: 'Success',
      subTitle: 'Question upload successfully!',
      buttons: ['Ok']
    });
    alert.present();
  }

}
