import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Parse } from 'parse';

/**
 * Generated class for the NewForumPostModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-forum-post-modal',
  templateUrl: 'new-forum-post-modal.html',
})
export class NewForumPostModalPage {

  title: string;
  content: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewForumPostModalPage');
  }

  dismiss (){
    this.viewCtrl.dismiss();
  }

  createAPost() {
    const ForumPost = Parse.Object.extend('ForumPost');
    let forumPost = new ForumPost();

    try {
      let author = Parse.User.current();
      let username = author.attributes.username;
      console.log('current author : ', author);
      forumPost
        .save({
          title: this.title,
          content: this.content,
          author: username
        })
        .then(savedPost => {
          console.log(savedPost, 'saved post');
          this.dismiss();
        })
        .catch(err => {
          console.log('error caught : ', err);
        });
    } catch (err) {
      console.log('cannot find username : ', err);
    }

  }

}
