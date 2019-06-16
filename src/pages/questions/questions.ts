import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
/**
 * Generated class for the QuestionsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {

  questions: any[];
  Question = Parse.Object.extend('Questions');
  term: any;
  termMap = {
    firstTerm: 'First Term',
    midTerm: 'Mid Term',
    preBoard: 'Pre Board',
    final: 'Final (TU)',
  };

  constructor(public navCtrl: NavController, private iab: InAppBrowser, private loadingCtrl: LoadingController) {
    // first time load
    this.term = 'firstTerm';
    this.updateQuestions();
  }

  updateQuestions() {
    // load q according to term
    console.log(' will load for ', this.term);

    const loader = this.loadingCtrl.create({
      content: 'Loading ...',
      duration: 3000
    });
    loader.present();

    let query = new Parse.Query(this.Question);
    let selectedSubject = 'Calculus';
    let selectedSemester = 'First';

    // query.equalTo('year', parseInt(this.year));
    query.equalTo('term', this.term);
    query.equalTo('subject', selectedSubject);
    query.equalTo('semester', selectedSemester);
    query.descending('createdAt');

    query.find().then(response => {
      console.log('response questions : ', response);
      this.questions = response.map(q => q.attributes);
      loader.dismiss();
    })
      .catch(err => {
        console.log(err);
      });

  }

  showPdf(question) {
    let pdfUrl = question.pdfUrl;
    console.log('this is the PDF url : ', pdfUrl);
    const googleDocLink = 'http://docs.google.com/viewer?url=';
    this.iab.create(googleDocLink + pdfUrl);
  }

}
