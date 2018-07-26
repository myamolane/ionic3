import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';
// import { IndexPage } from '../pages/index/index';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "MenuPage";

  constructor(private nativeAudio: NativeAudio, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.nativeAudio.preloadSimple('birthday', 'assets/mp3/birthday.mp3').then(() => {
        try{
          this.nativeAudio.play('birthday').catch(()=>{
            console.log('1');
            location.reload();
          })
        }
        catch(e){
          console.log('1');
        }
      })
    });
  }
}
