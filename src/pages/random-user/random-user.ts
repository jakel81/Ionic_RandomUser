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

  public countries = [
    { code: 'fr', label: 'France' },
    { code: 'gb', label: 'Royaume unis' },
    { code: 'us', label: 'Etats-unis' },
    { code: 'ch', label: 'Suisse' },
    { code: 'nz', label: 'Nouvelle Zélande' },
    { code: 'nl', label: 'Hollande' },
    { code: 'de', label: 'Allemagne' },
    { code: 'dk', label: 'Danemark' },
    { code: 'es', label: 'Espagne' },
    { code: 'br', label: 'Brésil' },
  ];

  public userSelectedIndex;
  public userList = [];
  public selectGender = "all";
  public selectCountry = ['fr'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.loadUsers((data) => {
      this.userList = data;
    });
  }

  /**
   * 
   * @param pos 
   */
  showUsers(pos) {
    this.userSelectedIndex = pos;
  }

  /**
   * 
   * @param callback 
   */
  loadUsers(callback) {
    let url = this.url + '?results=10';
    url += '&gender='+ this.selectGender;
    url += '&nat='+ this.selectCountry.join(',');

    this.http.get(url).subscribe((response) => {
      let data = response.json().results;
      callback(data);
    }
    );
  }

  /**
   * 
   * @param infiniteScroll 
   */
  loadMore(infiniteScroll) {
    this.loadUsers((data) => {
      this.userList = this.userList.concat(data);
      infiniteScroll.complete();
    });
  }

  /**
   * 
   * @param refresher 
   */
  refreshUsers(refresher) {
    this.loadUsers((data) => {
      this.userList = data.concat(this.userList);
      refresher.complete();
    });
  }

  /**
   * 
   * @param code 
   */
  onCountry(code) {
    console.log(code);
  }

}
