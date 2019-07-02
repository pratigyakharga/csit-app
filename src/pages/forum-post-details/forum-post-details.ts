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

  postId: any;
  post: any;
  comments: any;
  newComment: string;
  likes: number;
  postImageUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.postId = this.navParams.data.objectId;
    this.postImageUrl = 'https://ionicframework.com/docs/demos/api/card/madison.jpg';
    console.log(this.postId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPostDetailsPage');
    this.loadPost();
    this.loadComments();
  }

  loadPost() {
    const ForumPost = Parse.Object.extend('ForumPost');
    const query = new Parse.Query(ForumPost);
    query.get(this.postId)
      .then(post => {
        this.post = post.toJSON();
        this.post.postImageUrl = (this.post.postImageUrl || '').replace(/^http:\/\//i, 'https://');
        this.likes = this.post.likeCount;
      });
  }

  loadComments() {
    const ForumComment = Parse.Object.extend('ForumComment');
    let query = new Parse.Query(ForumComment);
    query.equalTo('postId', this.postId);
    query.ascending('createdAt');
    query.find()
      .then(comments => {
        this.comments = comments.map(c => c.toJSON());
      })
      .catch(err => {
        console.log('error while loading comments : ', err);
      });
  }

  submitComment() {

    try {
      let comment = {
        user: Parse.User.current().attributes.username,
        body: this.newComment,
        postId: this.post.objectId
      };

      const ForumComment = Parse.Object.extend('ForumComment');
      const forumComment = new ForumComment();
      forumComment
        .save(comment)
        .then(savedComment => {
          console.log('saved comment : ', savedComment);
          this.comments.push(savedComment.toJSON());
          this.newComment = '';
        })
        .catch(err => {
          console.log(' error while saving : ', err);
        });
    } catch (err) {
      console.log('error while making comment : ', err);
    }

  }

  incrementLikes() {
    this.likes += 1;
    const ForumPost = Parse.Object.extend('ForumPost');
    const query = new Parse.Query(ForumPost);
    query.get(this.post.objectId)
      .then(post => {
        post.increment('likeCount');
        return post.save();
      })
      .then(saved => {
        console.log('incremented likes', saved);
      });
  }
}
