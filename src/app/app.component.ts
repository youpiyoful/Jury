import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

// import { Environment } from '../environment/environment';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen) {
              // private environment: Environment
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // Initialize Firebase
      let config = {
        apiKey: "AIzaSyCQzMHgrKOSEnARFXNftpBFOOE3KK-26ZE",
        authDomain: "jury-53d6c.firebaseapp.com",
        databaseURL: "https://jury-53d6c.firebaseio.com",
        projectId: "jury-53d6c",
        storageBucket: "jury-53d6c.appspot.com",
        messagingSenderId: "367277339227"
      };
      firebase.initializeApp(config);
      // firebase.initializeApp(this.environment.fireBase);
    });
  }
}
