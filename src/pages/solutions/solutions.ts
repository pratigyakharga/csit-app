import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/**
 * Generated class for the SolutionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solutions',
  templateUrl: 'solutions.html',
})
export class SolutionsPage {

  solutions: any[];
  Solution = Parse.Object.extend('Solutions');
  term: any;
  termMap: any;

  constructor(public navCtrl: NavController, private iab: InAppBrowser, private loadingCtrl: LoadingController) {
    // first time load
    this.termMap = {
      firstTerm: 'First Term',
      midTerm: 'Mid Term',
      preBoard: 'Pre Board',
      final: 'Final (TU)',
    };
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

    let query = new Parse.Query(this.Solution);
    let selectedSubject = localStorage.getItem('SELECTED_SUBJECT') || 'Calculus';
    let selectedSemester = localStorage.getItem('SELECTED_SEMESTER') || 'First';

    // query.equalTo('year', parseInt(this.year));
    query.equalTo('term', this.term);
    query.equalTo('subject', selectedSubject);
    query.equalTo('semester', selectedSemester);
    query.descending('createdAt');

    query.find().then(response => {
      console.log('response questions : ', response);
      this.solutions = response.map(q => q.attributes);
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
