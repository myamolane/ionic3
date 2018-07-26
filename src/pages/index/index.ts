import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  pastDays
  pastHours
  pastMins
  pastSecs
  timer
  start: Date
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.start = new Date(2016, 3, 12);
    this.timer = setInterval(() => this.getPastDate(), 1000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  
  getPastDate() {
    let now = new Date();
    let total = Math.round((now.getTime() - this.start.getTime())/1000); // total = millsecs
    
    this.pastSecs = total%60;
    total -= this.pastSecs;
    total/=60; //total = mins
    this.pastMins = total%60;
    total = (total - this.pastMins)/60; // total = hours
    this.pastHours = total%24;
    this.pastDays = (total-this.pastHours)/24 + 1;
  }
}
