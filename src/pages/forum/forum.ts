import { Component } from '@angular/core';
import {} from 'ionic-angular';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {Parse} from 'parse';

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

    const ForumPost = Parse.Object.extend('ForumPost');
    let query = new Parse.Query(ForumPost);
    query.find()
    .then( posts => {
      let plainPosts = posts.map( p => p.attributes);
      this.posts = plainPosts;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  openAddPostModal(){
    let modal = this.modelCtrl.create('NewForumPostModalPage', {});
    modal.present();
  }

}
