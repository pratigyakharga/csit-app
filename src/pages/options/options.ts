import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OptionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }

  gotoQuestionsPage(){
    this.navCtrl.push('QuestionsPage');
  }

  gotoNotesPage(){
    this.navCtrl.push('NotesPage');
  }

  gotoSolutionsPage(){
    this.navCtrl.push('SolutionsPage');
  }

  gotoForumPage(){
    this.navCtrl.push('ForumPage');
  }

}
