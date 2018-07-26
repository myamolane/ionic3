import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, LoadingController, Nav, NavParams } from 'ionic-angular';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav
  rootPage="IndexPage"
  checked = false
  init = false
  pages: Array<{ title: string, component: any, icon: string}>
  constructor(private loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.pages=[
      //{ title: '我的订单', component: "OrderTabPage", icon: 'iconfont icon-dingdan'},
      { title: '爱の足迹', component: 'TravelPage', icon: 'iconfont icon-jiaoya'},
      // { title: '我的星级', component: 'StarPage', icon: 'iconfont icon-xingji'},
      // { title: '我的信用分', component: 'CreditScorePage', icon: 'iconfont icon-zuanshi'},
      // { title: '帮助中心', component: 'HelpCenter', icon: 'iconfont icon-bangzhuzhongxin'},
      // { title: '设置', component: 'SettingPage', icon: 'iconfont icon-shezhi'},
      // { title: '联系客服', component: 'Contact', icon: 'iconfont icon-kefu'}, 
    ]
  }

  ionViewDidLoad() {
  }
  openPage(page) {
    if (page.component === 'Contact')
      window.location.href = 'tel:079186869120'
    else if (page.component === "HelpCenter"){
      this.navCtrl.push('MarkdownPage',{key:'AppHelp'})
    }
    else
        this.nav.push(page.component)
  }
  enterCompanyCenter(){
    this.navCtrl.push('CompanyCenterPage')
  }
  menuOpen() {
    
  }
  toggle() {
    if(!this.init){
        this.init=true;
        return
    }
    const loading = this.loadingCtrl.create({
        content: '请稍候'
    })
    loading.present()
  }
}
