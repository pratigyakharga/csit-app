import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parse } from 'parse';
/**
 * Generated class for the ForumPostDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum-post-details',
  templateUrl: 'forum-post-details.html',
})
export class ForumPostDetailsPage {

  post: any;
  comments: any;
  likes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = {
      author: "pratigya",
      content: "But... Your user class should not be user queryable. This should be locked down in the class-level permissions section of the data browser, and only Cloud Code using the Master Key should be able to query users.",
      createdAt: "2019-06-16T17:29:21.416Z",
      objectId: "ER5ZWjE39H",
      title: "hello comment",
      updatedAt: "2019-06-16T18:45:37.031Z",
    };
    // this.post = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPostDetailsPage');
    this.loadComments();
  }

  loadComments() {
    const ForumComment = Parse.Object.extend('ForumComment');
    let query = new Parse.Query(ForumComment);
    query.equalTo('postId', this.post.objectId);
    query.ascending('createdAt');
    query.find()
      .then(comments => {
        this.comments = comments.map(c => c.toJSON());
      })
      .catch(err => {
        console.log('error while loading comments : ', err);
      });
  }

}
