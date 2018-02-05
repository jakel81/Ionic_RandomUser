import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RandomUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random-user',
  templateUrl: 'random-user.html',
})
export class RandomUserPage {

  private url: string = "https://randomuser.me/api";

  public user = {
    name: "",
    image: null
  };

  public userSelectedIndex;
  public userList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.http.get(this.url).subscribe((response) => {
      console.log(response);
      console.log(response.json());
      let data = response.json().results[0];
      this.user.name = data.name.title + ' ' + data.name.first + ' ' + data.name.last;
      this.user.image = data.picture.large;
    });
    this.loadUsers();
  }

  showUsers(pos) {
    this.userSelectedIndex = pos;
  }

  loadUsers() {
    this.http.get(this.url + '?results=10').subscribe((response) => {
      this.userList = response.json().results;
    });
  }

  loadMore(infiniteScroll) {
    this.http.get(this.url + '?results=10').subscribe((response) => {
      this.userList = this.userList.concat(response.json().results);
      infiniteScroll.complete();
    });
  }

  refreshUsers(refresher) {
    this.http.get(this.url + '?results=10').subscribe((response) => {
      this.userList = response.json().results.concat(this.userList);
      refresher.complete();
    });
  }

}
