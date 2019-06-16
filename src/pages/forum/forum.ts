import { Component } from '@angular/core';
import {} from 'ionic-angular';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {NewForumPostModalPage} from '../new-forum-post-modal/new-forum-post-modal';
/**
 * Generated class for the ForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  posts: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modelCtrl: ModalController) {
    this.posts = [
      {title: 'How do I make the app?'},
      {title: 'Please help me pass. :('},
      {title: 'I did good on my test.'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  openAddPostModal(){
    let modal = this.modelCtrl.create('NewForumPostModalPage', {});
    modal.present();
  }

}
