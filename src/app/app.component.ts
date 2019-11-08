import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  cities: Array<{title: string, name: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // define list of selectable city
    this.cities = [
      { title: 'Auto (IP based)', name: 'here' },
      { title: 'Jakarta', name: 'jakarta' },
      { title: 'Palembang', name: 'palembang' },
      { title: 'Sukabumi', name: 'indonesia/cibeureum' },
      { title: 'Jambi', name: 'jambi' },
      { title: 'Samarinda', name: 'samarinda' },
      { title: 'Bukit Tinggi', name: 'bukitinggi' },
      { title: 'Pekan Baru', name: 'pekanbaru' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Select first city as default
      this.nav.setRoot(HomePage, this.cities[0]);
    });
  }

  selectCity(city) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(HomePage, city);
  }
}
